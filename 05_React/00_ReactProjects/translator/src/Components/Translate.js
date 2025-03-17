import { useState } from 'react';
import languages from './languages'; 

const Translate = () => {
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLanguage, setFromLanguage] = useState('en-GB');
    const [toLanguage, setToLanguage] = useState('hi-IN');
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleTranslate = async () => {
        setLoading(true);
        const url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const translatedText = data.responseData.translatedText;
            setToText(translatedText);

            // Save to history
            setHistory((prevHistory) => [
                ...prevHistory,
                {
                    fromText,
                    toText: translatedText,
                    fromLanguage,
                    toLanguage,
                },
            ]);
        } catch (error) {
            console.error('Error during translation:', error);
        }
        setLoading(false);
    };

    const clearAll = () => {
        setFromText('');
        setToText('');
        setHistory([]);
    };

    return (
        <>
            <div className="wrapper">
                <div className="text-input">
                    <textarea
                        placeholder="Enter text to translate"
                        value={fromText}
                        onChange={(e) => setFromText(e.target.value)}
                    ></textarea>
                    <textarea value={toText} readOnly></textarea>
                </div>

                <ul className="controls">
                    <li>
                        <select
                            value={fromLanguage}
                            onChange={(e) => setFromLanguage(e.target.value)}
                        >
                            {Object.entries(languages).map(([code, name]) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </li>
                    <li>
                        <select
                            value={toLanguage}
                            onChange={(e) => setToLanguage(e.target.value)}
                        >
                            {Object.entries(languages).map(([code, name]) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </li>
                </ul>

                <button onClick={handleTranslate} disabled={loading}>
                    {loading ? 'Translating...' : 'Translate'}
                </button>
                <button onClick={clearAll}>Clear All</button>

                <div className="history">
                    <h3>Translation History</h3>
                    {history.length > 0 ? (
                        history.map((item, index) => (
                            <div key={index} className="history-item">
                                <div className="history-text">
                                    <p><strong>From:</strong> {item.fromText}</p>
                                    <p className="language-tag">({languages[item.fromLanguage]})</p>
                                </div>
                                <div className="history-text">
                                    <p><strong>To:</strong> {item.toText}</p>
                                    <p className="language-tag">({languages[item.toLanguage]})</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-history">No translations yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Translate;

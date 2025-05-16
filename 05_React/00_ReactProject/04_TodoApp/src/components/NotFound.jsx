import notFound from '../assets/notFound.png'
const NotFound = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
        <img width={80} src={notFound} alt="" />
        <h1 className='text-2xl text-white'>Contacts Not Found</h1>
    </div>
  )
}

export default NotFound
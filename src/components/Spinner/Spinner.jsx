import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <div className='container mx-auto mt-44'>
            <img src={spinner} alt="Loading..." className='block mx-auto w-64 h-52' />
        </div>
    )
}

export default Spinner;
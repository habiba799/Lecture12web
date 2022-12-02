import Image from 'next/image'
import { useRouter } from 'next/router'

function EventItem({item}) {
    
    const router = useRouter(); 
    return (

        
    <div className='w-8/12 bg-white flex p-2'>
        <Image
            src="/test.png"
            height={200}
            width={200}
            alt=""
        />


        <div className='ml-5 space-y-1  w-full'>
            <h2 className='font-bold text-xl'>{item.title}</h2>
            <h4>{item.location}</h4>
            <p>{item.description}</p>
            <div className='flex items-end justify-end'>
                <button 
                    className='bg-green-400 text-white py-2 px-7 rounded-full hover:bg-green-500'
                    onClick={() => router.push('/event/' + item.id) }
                >Explore</button>
            </div>
        </div>
    </div>
  )
}

export default EventItem
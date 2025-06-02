import clsx from 'clsx';

const Button = ({title, isDanger, icon, onClick}) => {

  return (
    <div className='w-2/12'>
      <button className={clsx('p-2 m-2 rounded-md w-full text-white center text-lg', isDanger ? 'bg-red-500' : 'bg-green-500')}>{icon} {title}</button>
    </div>
  )
}

export default Button;

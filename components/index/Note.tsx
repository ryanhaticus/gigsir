const Note = () => {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-center text-base text-gray-400'>
            &copy; {new Date().getFullYear()} GigSir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Note;

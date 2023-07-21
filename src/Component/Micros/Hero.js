export default function hero (){
    return (
        <>
        <section className="container mx-auto w-full h-full flex justify-start items-center grid grid-cols-12">
            <div className="col-span-6 font-LexendDeca text-white flex flex-col gap-2">
            <p className="text-[56px] font-bold">Instant collaboration for remote teams</p>
            <p className="text-[20px] w-[70%] ">All-in-one place for your remote team to <br/> chat, collaborate and track project progress.</p>
            <div className="flex gap-3 mt-10 ">
            <div className="relative w-[50%] flex justify-center items-center">
  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
    <svg
      className="w-5 h-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </span>
  <input
    type="text"
    className="w-full p-2 pl-3 rounded-sm"
    placeholder="Email"
  />
</div>

            <button className="w-[40%] text-[20px] p-2 bg-[#5468E7] rounded-sm">
                Get Early Access
            </button>
            </div>
            
            </div>
        </section>
        </>
    )
}
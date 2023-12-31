import Image from "next/image"

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative h-40 w-40">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          <div className="h-16 w-16 animate-spin">
            <Image
              src="http://kabramkrafts.com/wp-content/uploads/2017/04/earth.svg"
              alt="Earth"
              className="h-full w-full"
              width={1000}
              height={1000}
            />
            <div className="bg-transparent text-2xl">🧑‍🚀</div>
          </div>
        </div>
      </div>
    </div>
  )
}

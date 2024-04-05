import Image from 'next/image';
import Link from 'next/link';

const getCharacter = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CARTOON_LINK}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch a character...');
  }
  return response.json();
};

const CharacterId = async ({ params }) => {
  const data = await getCharacter(params.id);

  return (
    <div className="flex justify-center items-center w-[100%] max-w-[1000px]  mx-auto rounded-md">
      <div className="flex flex-col">
        <div className="flex justify-center mt-4 mb-8 ">
          <h1 className="text-2xl font-bold tracking-widest">{data.name}</h1>
        </div>
        <div className="flex text-xl ">
          <div className="flex p-8 rounded-md border-2 border-gray-300 ">
            <Image src={data.image} height={400} width={400} alt={data.name} />
          </div>
          <div className="flex flex-col justify-center pl-8">
            <p className="mb-4">
              <span className="font-bold mr-4">Gender:</span>
              <span className="tracking-wider">{data.gender}</span>
            </p>
            <p className="mb-4">
              <span className="font-bold mr-4">Species:</span>
              <span className="tracking-wider">{data.species}</span>
            </p>
            <p className="mb-4">
              <span className="font-bold mr-4">Status:</span>
              <span className="tracking-wider">{data.status}</span>
            </p>
            <p className="mb-4">
              <span className="font-bold mr-4">Location:</span>
              <span className="tracking-wider">{data.location.name}</span>
            </p>
            {data.origin.name !== 'unknown' ? (
              <p>
                <span className="font-bold mr-4">Originally from:</span>
                <span className="tracking-wider">{data.origin.name}</span>
              </p>
            ) : (
              <p>{''}</p>
            )}
            <Link href="/cartoon" scroll={false}>
              <button
                type="button"
                className="bg-green-500 rounded-lg px-10 py-3 text-white mt-12"
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterId;

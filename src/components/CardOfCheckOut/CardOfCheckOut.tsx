import Image from "next/image";

export default function CardOfCheckOut({
  info,
}: {
  info: {
    price: number;
    count: number;
    product: { slug: string; imageCover: string };
  };
}) {
  const {
    price,
    count,
    product: { slug, imageCover },
  } = info;
  return (
    <>
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3">
        <div className="bg-white p-1 rounded-lg shrink-0 border border-gray-200 flex items-center justify-center">
          <Image
            src={imageCover}
            alt={slug}
            width={48}
            height={48}
            className="w-12 h-12 object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="font-semibold text-gray-900 text-sm line-clamp-1">
            {slug}
          </h4>
          <p className="text-xs text-gray-500 mt-0.5">
            {count} × {price} EGP
          </p>
        </div>
        <div className="font-bold text-gray-900 text-sm">
          {count * price} EGP
        </div>
      </div>
    </>
  );
}

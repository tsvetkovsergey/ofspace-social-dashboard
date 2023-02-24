interface smallCardData {
  title: string;
  count: number;
  percent: number;
  bgStyle: string;
  icon: JSX.Element;
}

type Props = {
  className?: string;
  data: smallCardData;
};

const SmallCardLayout = ({ className, data }: Props) => {
  return (
    <div
      className={`flex flex-col justify-end rounded-2xl p-3 ${data.bgStyle} ${className}`}
    >
      <div className="mt-10 flex items-center">
        <i className="rounded-full bg-black bg-opacity-10 p-2 text-white">
          {data.icon}
        </i>
        <div className="ml-2 flex-1 text-xs font-extralight text-white">
          <p>{data.title}</p>
          <div className="mt-2 flex items-center justify-between">
            <h3 className="text-base font-semibold">{data.count} k</h3>
            <p className="text-sm text-white text-opacity-70">{`${
              data.percent > 0 ? '+' : ''
            }${data.percent}%`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCardLayout;

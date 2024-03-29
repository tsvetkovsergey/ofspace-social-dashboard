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
      className={`flex flex-col rounded-2xl p-3 2xl:justify-end ${data.bgStyle} ${className}`}
    >
      <div className="flex flex-col items-start 2xl:flex-row">
        <i className="self-end rounded-full bg-black bg-opacity-10 p-2 text-white">
          {data.icon}
        </i>
        <div className="w-full flex-1 text-xs font-extralight text-white dark:text-inherit 2xl:ml-3">
          <p>{data.title}</p>
          <div className="mt-2 flex items-center justify-between">
            <h3 className="text-base font-semibold">{data.count} k</h3>
            <p className="text-sm text-white text-opacity-70 dark:text-slate-100 dark:text-opacity-70">{`${
              data.percent > 0 ? '+' : ''
            }${data.percent}%`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCardLayout;

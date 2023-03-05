import ButtonWithTooltip from './ButtonWithTooltip';

type Props = {};

const useRefExperiment = (props: Props) => {
  return (
    <div>
      Schedule
      <div className="mt-2 bg-slate-600 p-5 text-slate-900 [&>div]:h-24">
        <div>
          <ButtonWithTooltip
            tooltipContent={
              <div>
                This tooltip does not fit above the button.
                <br />
                This is why it's displayed below instead!
              </div>
            }
          >
            Hover over me (tooltip below)
          </ButtonWithTooltip>
        </div>
        <div>
          <ButtonWithTooltip
            tooltipContent={<div>This tooltip fits above the button</div>}
          >
            Hover over me (tooltip above)
          </ButtonWithTooltip>
        </div>
        <div>
          <ButtonWithTooltip
            tooltipContent={<div>This tooltip fits above the button</div>}
          >
            Hover over me (tooltip above)
          </ButtonWithTooltip>
        </div>
      </div>
    </div>
  );
};

export default useRefExperiment;

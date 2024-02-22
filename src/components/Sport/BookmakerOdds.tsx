interface ShowOddsProp {
  data: any;
  handleStake: (
    value: number,
    team: string,
    type: string,
    market: string,
    stake?: string
  ) => void;
}
export const BookmakerOdds = ({ data, handleStake }: ShowOddsProp) => {
  const runnerOdds = JSON.parse(data.runner_odds);
  return (
    <div>
      <div className="items-center flex w-full md:w-[220px] lg:w-[300px] bg-secondary p-2 px-4 rounded-lg font-bold">
        <div className="flex-[1.5]">
          <h1>{data.title}</h1>
        </div>
        <div className="hidden flex-[1.5] z-0 md:flex justify-around">
          <span>Back</span>
          <span>Lay</span>
        </div>
      </div>
      <div className="bg-white text-primary rounded-b-lg p-4 font-bold w-full md:w-[220px] lg:w-[300px]">
        <div className="flex">
          <div className="flex-[1.5]">
            <h1>{runnerOdds[0].runner_name}</h1>
          </div>
          <div className="flex-[1.5] flex flex-col gap-4 md:flex-row justify-between">
            <span
              className="flex justify-center items-center bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
              onClick={() =>
                handleStake(
                  runnerOdds[0].back,
                  runnerOdds[0].runner_name,
                  "back",
                  data.title
                )
              }
            >
              {runnerOdds[0].back}
            </span>

            <span
              className="flex justify-center items-center bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
              onClick={() =>
                handleStake(
                  runnerOdds[0].lay,
                  runnerOdds[0].runner_name,
                  "lay",
                  data.title
                )
              }
            >
              {runnerOdds[0].lay}
            </span>
          </div>
        </div>
        <hr className="m-2" />
        <div className="flex">
          <div className="flex-[1.5]">
            <h1>{runnerOdds[1].runner_name}</h1>
          </div>
          <div className="flex-[1.5] flex flex-col gap-4 md:flex-row justify-between">
            <span
              className="flex justify-center items-center bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
              onClick={() =>
                handleStake(
                  runnerOdds[1].back,
                  runnerOdds[1].runner_name,
                  "back",
                  data.title
                )
              }
            >
              {runnerOdds[1].back}
            </span>

            <span
              className="flex justify-center items-center bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
              onClick={() =>
                handleStake(
                  runnerOdds[1].lay,
                  runnerOdds[1].runner_name,
                  "lay",
                  data.title
                )
              }
            >
              {runnerOdds[1].lay}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

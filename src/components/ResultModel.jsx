import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const youLost = remainingTime <= 0;
  const formatedRemainingNumber = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      {youLost && <h2>You Lost</h2>}
      {!youLost && <h2>Your Score :{score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stoped the timer with{" "}
        <strong>{formatedRemainingNumber} second left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModel;

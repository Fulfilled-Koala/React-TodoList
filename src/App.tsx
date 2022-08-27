import create from "zustand";

type State = {
  count: number;
  increment: () => void;
};

const useStore = create<State>()((setState) => ({
  count: 0,
  increment: () => setState((state) => ({ count: state.count + 1 })),
}));

export default function App(): JSX.Element {
  const { count, increment } = useStore((state) => state);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => increment()}
        className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
      >
        Increment
      </button>
      <p className="text-lg">
        Count is <span className="font-bold text-blue-700">{count}</span>
      </p>
    </div>
  );
}

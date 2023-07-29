interface SnackbarProps {
  type: 'error';
  title: string;
  description: string;
}
export const Snackbar = ({type, title, description} : SnackbarProps) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed"
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <span className="block sm:inline">
        &nbsp; {description}
      </span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        ></svg>
      </span>
    </div>
  );
};

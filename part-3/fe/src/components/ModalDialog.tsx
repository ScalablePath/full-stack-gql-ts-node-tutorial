export const ModalDialog = (props: {
  title: string;
  content: JSX.Element;
  enableSave: boolean;
  onClose: () => void;
  onSave: () => void;
}) => {
  const { title, content, enableSave, onClose, onSave } = props;

  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="relative p-4 w-full max-w-2xl h-full sm:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-between items-start p-4 rounded-t border-b">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
              onClick={onClose}>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {content}
          <div className="flex items-center justify-end p-3 space-x-2 rounded-b border-t border-gray-200 text-right">
            <button
              disabled={!enableSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              onClick={onSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

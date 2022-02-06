const Modal = ({ close }) => (
  <>
    {/* Title */}
    <div className="flex justify-between items-center pb-3">
      <p className="text-2xl font-bold">Simple Modal!</p>
      <div className="cursor-pointer z-50" onClick={close}>
        <svg
          className="fill-current text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
      </div>
    </div>
    {/* Body */}
    <p>Modal content can go here</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      assumenda autem consequatur dolor ea eaque earum eius excepturi expedita
      iure ma quidem, rerum voluptatum? A delectus ducimus error ex expedita
      impedit vero!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aspernatur assumenda autem consequatur dolor ea eaque earum eius excepturi
      expedita iure ma quidem, rerum voluptatum? A delectus ducimus error ex
      expedita impedit vero!Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Aspernatur assumenda autem consequatur dolor ea eaque earum eius
      excepturi expedita iure ma quidem, rerum voluptatum? A delectus ducimus
      error ex expedita impedit vero!Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Aspernatur assumenda autem consequatur dolor ea eaque
      earum eius excepturi expedita iure ma quidem, rerum voluptatum? A delectus
      ducimus error ex expedita impedit vero!
    </p>

    {/* Footer */}
    <div className="flex justify-end pt-2">
      <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
        Action
      </button>
      <button
        className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
        onClick={close}
      >
        Close
      </button>
    </div>
  </>
);

export default Modal;

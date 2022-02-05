const ModalContent = ({ close }) => (
  <div className="py-4 text-left px-6">
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
      iure magnam nemo omnis, perspiciatis quae sit, velit voluptatibus
      voluptatum. Architecto consectetur corporis explicabo omnis perspiciatis
      rem sapiente? Facilis, id, quis. Autem beatae facilis iste iusto natus
      nihil rem repellendus ut voluptatum? A accusamus aliquid assumenda
      distinctio ducimus fugit hic in itaque, nemo quaerat, quo repellat, sed!
      Eligendi magnam maxime nobis ratione saepe temporibus voluptatem? Neque,
      perferendis, veritatis? A consequuntur cum ea eum ex ipsum nobis provident
      quidem, rerum voluptatum? A delectus ducimus error ex expedita impedit
      laboriosam porro similique sit tenetur? Excepturi harum non quam. Ad alias
      blanditiis, consectetur consequuntur cumque cupiditate eius excepturi
      fugiat illum, incidunt labore libero magni molestias odit quaerat quos sed
      tempore voluptate voluptatibus voluptatum! Ad blanditiis cupiditate
      debitis dignissimos error est, et ex exercitationem explicabo hic labore
      laudantium mollitia praesentium quaerat quidem quos saepe suscipit unde
      voluptas voluptates. Alias amet magni minus molestias quia quidem rerum
      sunt, tempora! Culpa dignissimos enim error, esse ex, exercitationem
      molestiae nobis officiis, pariatur totam ut voluptate voluptatum. A amet
      architecto cupiditate, debitis eaque, enim eveniet illo illum laudantium
      necessitatibus nulla quam reprehenderit rerum sunt suscipit, unde vel
      velit voluptatum. Ab amet asperiores delectus expedita explicabo
      laudantium, libero officia saepe tempora vero? Aperiam aut eius, eligendi
      et ex illum, incidunt molestias nam nobis odit perferendis placeat quidem
      saepe, sed temporibus totam vel veniam! Amet aperiam autem delectus
      dignissimos dolorem ducimus fuga harum hic impedit iste, modi molestias
      neque quae reprehenderit sint veritatis voluptatibus. Animi assumenda aut
      cupiditate eaque earum error in, incidunt laborum magni nemo nisi nobis
      nulla numquam quae sequi similique soluta voluptatum. Ad autem cumque
      dolorum possimus sequi? Atque autem deleniti fugiat, id labore maiores
      nulla perferendis provident quia voluptate? Cumque deserunt enim, eveniet
      expedita fuga inventore ipsa labore laudantium libero magnam maxime,
      molestiae nam neque, nostrum optio praesentium quia quis quo recusandae
      saepe sunt temporibus veritatis voluptas! Accusantium ad assumenda culpa
      cupiditate, esse quas tempora voluptate? Aliquam, assumenda culpa dolor
      expedita facilis fugiat in ipsa maxime, nostrum optio quas sit! Alias
      iure, unde? Amet cum dolor ipsum iusto minima molestiae quis, reiciendis
      velit. Assumenda beatae, delectus earum eos expedita fuga ipsum magni
      minima molestiae molestias nihil nobis numquam quia quidem sequi tempora
      voluptatem voluptatum! Delectus, ea facere fuga, laboriosam libero maiores
      odio odit officia provident ratione reprehenderit voluptatum. Accusamus
      accusantium ad aliquam aliquid amet animi atque aut commodi consequuntur
      debitis dicta eaque eligendi eos et eum expedita explicabo illum iusto
      minus mollitia nobis obcaecati quae quasi quibusdam quos saepe similique
      sint sunt tempora, tempore temporibus tenetur voluptas voluptatum. Commodi
      deleniti harum, ipsam natus nulla odio officiis soluta voluptas.
      Aspernatur at autem eaque earum esse facere iure, nulla officia officiis
      veritatis voluptas voluptatum? Adipisci animi corporis dignissimos error
      eum facere, hic iste laudantium minus necessitatibus nemo neque omnis
      totam unde, voluptatum! Adipisci commodi consectetur culpa cum ducimus
      earum eius eligendi et id illo incidunt iusto maiores mollitia obcaecati
      perferendis qui quibusdam, reprehenderit sed sint sunt tempora, temporibus
      vero!
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
  </div>
);

export default ModalContent;

const FilledButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-karma-blue hover:bg-karma-green  font-orbitron text-black font-bold text-lg py-2 px-10 tracking-wide rounded-xl place-items-center mt-8 "
    >
      {text}
    </button>
  );
};

export default FilledButton;

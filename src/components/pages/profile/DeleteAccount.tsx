import { toast } from "react-hot-toast";

const DeleteAccount = () => {
  const handleDelete = () => {
    toast.success("Account Deleted Successfully!");
  };
  return (
    <div className="mt-5 rounded-[15px] bg-[#232A3B] p-5 sm:mt-S60">
      <p className="text-2xl font-semibold leading-9 sm:text-2.3xl">
        Delete your Account
      </p>
      <p className="mt-2.5 text-sm font-normal leading-[21px] text-[#BCC4D9]">
        consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
        commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
      </p>

      <div className="mt-5 rounded-[10px] border border-C2E3549 bg-C2E3549 p-5">
        <p className=" font-semibold leading-snug">Delete Account</p>
        <button
          onClick={handleDelete}
          className="mt-5 rounded-[10px] bg-[#EA1F37] px-5 py-2.5 font-bold"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;

function Footer() {
  return (
    <>
      <footer className="bg-lightBlack w-full flex justify-center">
        <div className="flex items-center justify-center container max-w-[1300px] lg:px-20 py-3 px-10">
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
 
              <p className="text-[16px] font-medium text-white">
                Privacy Policy | © {new Date().getFullYear()} 
                <span className="text-lightGreen"> CVsavvy</span>
              </p>
            </div>
        </div>
      </footer>
    </>
  );
}
 
export default Footer;
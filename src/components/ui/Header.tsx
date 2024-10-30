

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 h-[56px] bg-white px-4 shadow-bottomShadow flex items-center gap-2 md:px-[100px] lg:h-[64px]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
        alt="profile picture"
        className="w-10 h-10 object-cover object-center rounded-50 lg:w-12 lg:h-12"
      />
      <p className="font-medium">John Doe</p>
    </div>
  );
}

export default Header

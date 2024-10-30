

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bg-white px-4 py-2 shadow-bottomShadow flex items-center gap-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
        alt="profile picture"
        className="w-12 h-12 object-cover object-center rounded-50"
          />
          <p className="font-medium">John Doe</p>
    </div>
  );
}

export default Header

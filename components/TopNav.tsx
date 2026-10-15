import NavButton from "./NavButton";
import Avatar from "./Avatar";

export default function TopNav() {
  return (
    <header className="flex items-center justify-between border-b border-emerald-100 bg-white px-6 py-3">
      <span className="text-xl font-bold text-emerald-600">Edge</span>
      <nav className="flex items-center gap-1">
        <NavButton icon="/icons/feedback.png" alt="Feedback" label="Feedback" />
        <NavButton icon="/icons/mystuff.png" alt="My stuff" label="My stuff" />
        <NavButton icon="/icons/History.png" alt="History" label="History" />
        <NavButton icon="/icons/bell.png" alt="Notifications" />
        <Avatar />
      </nav>
    </header>
  );
}

import { useSelector } from "react-redux";
import ReadingListTable from "../ReadingList/ReadingListTable";

export default function Home() {
  const loginUser = useSelector((state) => state?.auth?.user ?? {});

  return (
    <div>
      <ReadingListTable user={loginUser} />
    </div>
  );
}

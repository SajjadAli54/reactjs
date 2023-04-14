import { Picture } from "./picture";

export default function UsePicture() {
  return (
    <Picture
      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
      alt="A random image"
    >
      <p>A Random Image</p>
    </Picture>
  );
}

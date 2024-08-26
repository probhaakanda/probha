
import { AuthBox } from "./components/authBox";



export default function LoginPage() {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
      width:'100%'
    }}>
      <AuthBox />
    </div>
  );
}

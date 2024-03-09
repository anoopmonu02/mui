import MuiRadioBtn from "./components/MuiRadioBtn"
import MuiCheckbox from "./components/MuiCheckbox"
import MuiSwitch from "./components/MuiSwitch"
import MuiAutoComplete from "./components/MuiAutoComplete"
import MuiLayout from "./components/MuiLayout"
import MuiCard from "./components/MuiCard."
import MuiAccordian from "./components/MuiAccordian"
import MuiNavbar from "./components/MuiNavbar"
import { CssBaseline } from "@mui/material"
import MuiLink from "./components/MuiLink"

function App() {

  return (
    <>
      <CssBaseline />
      <MuiNavbar />
      <MuiRadioBtn />
      <MuiCheckbox />
      <MuiSwitch />
      <MuiAutoComplete />
      <br></br>
      <MuiLayout />
      <MuiCard />
      <MuiAccordian />
      <hr/>
      <MuiLink />

    </>
  )
}

export default App

import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./SignIn.scss";

function SignIn() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h2">Sign In</Typography>
          <FormGroup>
            <TextField
              label="Username"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
            />
            <TextField
              label="Password"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
              type="password"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Remember Me"
            ></FormControlLabel>
            <Button variant="contained" fullWidth>
              Sign In
            </Button>
          </FormGroup>
          <Typography variant="body2" marginTop={"1rem"}>
            New to TrailBLZR? <Link to="/signup">Sign up now.</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SignIn;

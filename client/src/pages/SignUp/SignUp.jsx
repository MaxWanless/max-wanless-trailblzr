import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import FormGroup from "@mui/material/FormGroup";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./SignUp.scss";

function SignUp() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h2">Sign Up</Typography>
          <FormGroup>
            <TextField
              label="First Name"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
            />
            <TextField
              label="Last Name"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
            />
            <TextField
              label="Email"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
            />
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
            <Button type="submit" variant="contained" fullWidth>
              Sign Up
            </Button>
          </FormGroup>
          <Typography variant="body2" marginTop={"1rem"}>
            Already a member? <Link to="/signin">Sign In</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SignUp;

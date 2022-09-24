import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

const TrailCard = ({ trail }) => {
  let difficultyColor = "";
  if (trail.difficulty === "easy") {
    difficultyColor = "success";
  } else if (trail.difficulty === "moderate") {
    difficultyColor = "warning";
  } else {
    difficultyColor = "error";
  }

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography fontWeight="bold" marginRight={"1rem"}>
          {trail.name}
        </Typography>
        <Typography marginRight={"1rem"}>{trail.length}</Typography>
        <Chip
          label={trail.difficulty}
          color={difficultyColor}
          size="small"
          variant="outlined"
          sx={{ justifySelf: "flex-end" }}
        />
      </Box>
      <Divider sx={{ margin: "0.25rem 0" }} />
      <Typography sx={{ height: "100%" }}>{trail.description}</Typography>
    </Box>
  );
};

export default TrailCard;

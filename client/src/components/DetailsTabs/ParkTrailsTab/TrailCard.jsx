import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

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
        sx={{ display: "flex", alignContent: "center", marginBottom: "0.5rem" }}
      >
        <Typography marginRight={"1rem"}>{trail.name}</Typography>
        <Typography marginRight={"1rem"}>{trail.length}</Typography>
        <Chip
          label={trail.difficulty}
          color={difficultyColor}
          size="small"
          variant="outlined"
        />
      </Box>
      <Typography sx={{ height: "100%", overflowY: "scroll" }}>
        {trail.description}
      </Typography>
    </Box>
  );
};

export default TrailCard;

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import "../style/footer.scss";

export default function FooterComponent() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h2>A propos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis
          nisl, consequat laoreet nibh at, volutpat semper enim. Sed rutrum
          metus et dui dictum, quis elementum mauris laoreet. Fusce congue risus
          turpis, at mattis diam feugiat non. In lacinia fringilla mi ut
          accumsan. Nam eu dui efficitur, maximus sapien ac, hendrerit ligula.
        </p>
      </div>
      <div className="footer__container">
        <div>
          <h2>Contact</h2>
          <p>
            Nom à demander : 291 Chemin de Chabarette, 84220 Roussillon.
            <br />
            Email : emailademander@email.com <br />
            Tel : +33 6 26 96 33 29
          </p>
        </div>
        <div>
          <h2>Plan</h2>
          <div></div>
        </div>
      </div>
      <div className="footer__container">
        <h2>Langue</h2>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="age"
            label="Age"
          >
            <MenuItem value={10} selected>
              FR
            </MenuItem>
            <MenuItem value={20}>EN</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

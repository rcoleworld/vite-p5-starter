import p5 from "p5";

const app = (p: p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
  };

  p.draw = () => {
    p.background(0, 0, 255);
  };
};

new p5(app);

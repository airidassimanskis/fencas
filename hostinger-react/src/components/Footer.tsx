import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              color="blue-gray"
              className="font-normal"
            >
              info@fencas.lt
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="font-normal"
            >
              +37060813610
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="font-normal"
            >
              +37063093384
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 fencas.lt
      </Typography>
    </footer>
  );
}
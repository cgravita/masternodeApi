import { exec, spawn } from "child_process";

const comand ={
  winStart : './lyrad -datadir="\\Users\GiovanniBarlucchi\Documents\Wallet" -config="\Users\GiovanniBarlucchi\Documents\Wallet\lyra.conf"',
  winGetInfo : 'lyra-cli.exe -datadir="\\Users\\GiovanniBarlucchi\\Documents\\Wallet" -config="\\Users\\GiovanniBarlucchi\\Documents\\Wallet\\lyra.conf" getinfo',
  winStop : './lyra-cli -datadir="\Users\GiovanniBarlucchi\Documents\Wallet" -config="\Users\GiovanniBarlucchi\Documents\Wallet\lyra.conf" stop',
}
export const startWT = async (req, res) => {
  /*
  exec("lyrad &", (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);
      res.send(`Err = ${err}`);
      return;
    } else if (stderr) {
      console.log(`stderr = ${stderr}`);
      res.send(`Wallet già avviato`);
      return;
    }
    console.log(`Exec execution= MN Avviato con successo ${stdout}`);
    res.send(`Stdout = MN Avviato con successo ${stdout}`);
  });
  */
  const child = spawn(comand.winStart);

  child.on("exit", (code, signal) => {
    console.log(`child process EXITED with code ${code} and signal ${signal}`)
    res.status(200).json({status:`Wallet start Succesfull`, start:"0"});
  })

  child.on("error", (code, signal) => {
    console.log(`child process ERROR with code ${code} and signal ${signal}`)
    res.send(`Err`);
  })

  child.on("close", (code, signal) => {
    console.log(`child process CLOSE with code ${code} and signal ${signal}`)
    res.send(`Close`);
  })
};

export const stopWT = async (req, res) => {
  exec(comand.winStop, (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);
      res.send(`Err = ${err}`);
      return;
    }

    console.log(`Exec execution: ${stdout}`);
    res.send(`Stdout = ${stdout}`);
  });
};

export const getInfoWT = async (req, res) => {
  exec(comand.winGetInfo, (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);
      res.send(`Err = ${err}`);
      return;
    }

    const stdoutJSON= JSON.parse(stdout)
    console.log(`Execution: ok`);
    res.status(200).json(stdoutJSON);
  });
};


export const getInfoWT_data = async (req, res) => {
  const {data} = req.params;

  exec(comand.winGetInfo, (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);
      res.send(`Err = ${err}`);
      return;
    }

    console.log(`Exec execution: ${stdout}`);
    console.log(stdout)
  });

  

};


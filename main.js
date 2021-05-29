const prosess = require("./prosess");
const yargs = require("yargs");

yargs.command({
  command: "run",
  describe: "Running Project",
  builder: {
    email: {
      describe: "Email Tujuan",
      demandOption: true,
      type: "string",
    },
    cc: {
      describe: "Email CC",
      demandOption: false,
      type: "string",
    },
    bcc: {
      describe: "Email BCC",
      demandOption: false,
      type: "string",
    },
    subject: {
      describe: "Subject Email",
      demandOption: true,
      type: "string",
    },
    type: {
      describe: "Type Project",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    prosess.kirimEmail(argv.email, argv.cc, argv.bcc, argv.subject, argv.type);
  },
});

yargs.parse();

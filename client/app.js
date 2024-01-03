var readlineSync = require('readline-sync')
var grpc = require("@grpc/grpc-js")
var protoLoader = require("@grpc/proto-loader")
var PROTO_PATH = __dirname + "/protos/grassactivationService.proto"

var packageDefinition = protoLoader.loadSync(PROTO_PATH)
var proto = grpc.loadPackageDefinition(packageDefinition).grassactivationService
var client = new grassactivationservice_proto.grassactivationService("0.0.0.0:40000", grpc.credentials.createInsecure());

var call=client.grassactivationService()
call.on('data',function (resp){
console.log(resp.name has made( [data][username,password,locatiion,drainage] )
  })

call.on("end",function(){
  })

  call.on("error",function(e){
    console.log("an error occurred")
  })

  varuser=readlineSync.question("where is the location?")

  console.log("where is the location?(q to quit)")
  var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout);

    rl.on('line',function (line){
       switch(line.trim()) {
      case 'hello':
        console.log('world!');
        break;
      default:
        console.log('What is your userName `' + line.trim() + '`');
        break;
    }
    rl.setPrompt(prefix, prefix.length);
    rl.prompt();
  }).on('close', function() {
    console.log('Please enter your password ');
    process.exit(0);
  });
  console.log(prefix + 'What service do you require .');
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();

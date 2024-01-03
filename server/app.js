var grpc = require("@grpc/grpc-js")
var protoLoader = require("@grpc/proto-loader")
var PROTO_PATH = __dirname + "/protos/grassactivatonService.proto"
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH
)
var proto = grpc.loadPackageDefinition(packageDefinition).grassactivation

var grassactivationservice={
}

var clients={

}

var highestgrassactivationService=0
var message=null
function makegrassactivationService(call){
  try {
    var number1=parseInt(call.request.username)
    var number2=parseInt(call.request.password)
   if(!isNAN (number1) && !isNAN (number2)){
     var result=number1+number2
     callback( null,{
      message:undefined
  })
  }else{
    callback( null,{
    message:"Please specify your username "
  })
 }
}catch (e) {
callback( null,{
  message:"An error has occurred"


})


  call.on(data,function(soil){
    if(!(grassactivationService.name in clients)){
      clients[grassactivation.name]={
        name:grassactivation.name,
        call:call
      }
    }

if(!(name in grassactivationService)){
  grassactivationService[grassactivationService.name]=0
}
grassactivationService[grassactivationservice].name+=1
if(grassactivationService.grassactivationservice  > highestgrassactivationservice ||!message){
grassactivationService=grassactivationService.grassactivationService
response ="current highest grassactivationService is" +grassactivationService.name +"with grassactivationService of" +highestgrassactivationService
}

for(var client in clients){
  client[client].call.write(
    {
    grassactivationService:grassactivationService,
    name:grassactivationService.name,
    grassactivationServiceNo:[grassactivationService.name],
    message:message
  }
)
}

})

call.on (end,function(){
  call.end()
})

call.on("error",function(e){
  console.log(e)
})

}
var server=newgprc.Server()
server.addService(grassactivationService_proto.grassactivationService.service,{makegrassactivationService:grassactivationService})
server.bindAsync("0.0.0.0:40000",gprcServerCredentials.createInsecure(),function(){
  server.start()
})

var server = new grpc.Server()
server.bindAsync("0.0.0.0:40000", grpc.ServerCredentials.createInsecure(), function() {
  server.start()
})
}

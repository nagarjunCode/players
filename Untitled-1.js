str = 'asss' //output 3 => aba len => 7
var len =str.length;
var hash = {};
var biggest = str[0];
function main(){
    for(var i =1; i< len;i++){
        for(j=0;j<len-i;j++){
            var subStr = str.substr(j,i+1);
            if(hash[subStr] === undefined)
                hash[subStr] = 1;
            else
                {
                    hash[subStr]++;
                    if(hash[subStr] > 1 && subStr.length > biggest.length)
                        biggest = subStr;
                }
        }
    }
    // var biggest = Object.keys(hash)[0];
    // Object.keys(hash).forEach(subs =>{
    //     if(hash[subs] > 1 && subs.length > biggest.length)
    //         biggest = subs;
    // });
    console.log(biggest.length)
}
main()
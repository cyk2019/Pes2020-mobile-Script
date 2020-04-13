//随机时间
var randomTime = random(2,3)*1000;

//检测是否开启无障碍服务
toast("必须开启无障碍服务");
auto.waitFor()
toast("5秒后脚本启动");
sleep(5000);

//自动适配点击的屏幕宽高
setScreenMetrics(1080, 2340);

//提示信息
toast("实况足球手游脚本V1.1  启动...");
sleep(randomTime);
toast("当前屏幕尺寸 高："+device.height+" 宽："+device.width);
sleep(randomTime);

//检查是否有CaptureScreen文件夹
toast("自动创建ScreenCapture");
files.ensureDir("/sdcard/ScreenCapture/");
sleep(randomTime);

//获取截图权限
if(!images.requestScreenCapture())
{
    toast("获取截图权限失败！");
    exit();
}
else
{
    toast("获取截图权限成功！");
    sleep(randomTime);
}

//点击比赛栏目
click(475,165);
sleep(randomTime);

//点击活动模式
click(1630,490);
sleep(randomTime);

//选择活动1
click(900,350);
sleep(randomTime);

//点击活动1的继续
click(1810,980);
sleep(randomTime);

//点击Sim比赛
click(1600,580);
sleep(randomTime);

//循环
for(var i = 0;i<9999;i++)
{
    var count = 0;
    startGame();
    startGame().next.recycle();
    count = count + 1;
    toast("已经踢了"+count+"局");
}

/**
 * 
 * 游戏循环部分 
 */
function startGame()
{
    //点击前往比赛
    click(2015,985);
    sleep(8000); //队伍匹配时间

    //点击下一步
    click(2015,985);
    sleep(randomTime);

    //进入正式比赛页面
    click(2015,985);
    sleep(10000);

    do
    {
        //前往比赛
        var next = images.read("/sdcard/ScreenCapture/next.jpg");
        //比赛回放
        var traceImg = images.read("/sdcard/ScreenCapture/trace_game.jpg");
        //中场休息
        var halfImg = images.read("/sdcard/ScreenCapture/half_game.jpg");
        //全场结束
        var endImg = images.read("/sdcard/ScreenCapture/end_game.jpg");
        //获取奖励
        var rewardImg = images.read("/sdcard/ScreenCapture/reward.jpg");
        //续约状态
        var renewImg = images.read("/sdcard/ScreenCapture/renew.jpg");
        //球员续约
        var playerImg = images.read("/sdcard/ScreenCapture/player_status.jpg");
        //教练续约
        var coachImg;


        //截屏
        var img = images.captureScreen();
        images.save(img, "/sdcard/ScreenCapture/status.png");
        sleep(randomTime);
        var statusImg = images.read("/sdcard/ScreenCapture/status.png");

        //比赛回放
        if(images.findImage(statusImg, traceImg))
        {
            traceGame();
        }
        
        //中场休息
        else if(images.findImage(statusImg, halfImg))
        {
            halfGame();
        }

        //全场结束
        else if(images.findImage(statusImg, endImg))
        {
            endGame();
        }

        //活动奖励
        else if(images.findImage(statusImg, rewardImg))
        {
            reward();
        }

        //教练、球员续约
        else if(images.findImage(statusImg, renewImg))
        {
            //球员续约
            if(images.findImage(statusImg, playerImg))
            {
                var select = images.read("/sdcard/ScreenCapture/select.jpg");
                while(images.findImage(statusImg, playerImg))
                {
                    var p = images.findImage(statusImg, select);
                    click(p.x,p.y);
                    sleep(1000);
                    player_renew();
                    statusImg.recycle();

                    img = images.captureScreen();
                    images.save(img, "/sdcard/ScreenCapture/status.png");
                    sleep(randomTime);
                    var statusImg = images.read("/sdcard/ScreenCapture/status.png");
                }
                select.recycle();
            }

            //教练续约

            sleep(1000);
            click(2015,985);
            sleep(5000);
        }
        

        traceImg.recycle();
        halfImg.recycle();
        endImg.recycle();
        rewardImg.recycle();
        renewImg.recycle();
        playerImg.recycle();

        sleep(3000);

    }while(!images.findImage(statusImg, next));
}

/**
 * 半场
 */
function halfGame()
{
    click(2015,985);
    sleep(randomTime);
    click(2015,985);
}

/**
 * 全场
 */
function endGame()
{
    click(2015,985);
    sleep(randomTime);
    click(2015,985);
    sleep(5000);
    click(2015,985);
    sleep(randomTime);
    click(2015,985);
}

/**
 * 比赛过程回放
 */
function traceGame()
{
    click(2015,985);
    click(2015,985);
    click(2015,985);
}

/**
 * 比赛结束获得奖励
 */
function reward()
{
    click(1180,885);
    sleep(randomTime);
    click(1180,885);
    sleep(randomTime);
    click(1180,885);
}

/**
 * 教练续约
 */
function coach_renew()
{
    click(1168,824);
    sleep(randomTime);
    sleep(5000);
}

/**
 * 球员续约
 */
function player_renew()
{
    click(1406,988); //签约
    sleep(1000);
    click(1150,302); //使用GP支付续约
    sleep(1000);
    click(946,610);
    sleep(1000);
    click(1400,630);
    sleep(1000);
    click(1165,760); //点击ok
}
#ifndef __THYBOT_ROBOT__
#define __THYBOT_ROBOT__
#include <exception.ice>

module ThybotKioskService {

    module RobotService {

        struct LEDSensor{
            int value;
            int mask;
            int onValue; //the state value when sensor is on
        };

        struct Motor{
            int dir;
            int enable;
            int brake;
        };

        struct IO{
            int value;
            int onValue;
        };

        struct Position {
            int x;
            int y;
        };

        struct InfoXY{
            Position pos;
            LEDSensor sensorX1;
            LEDSensor sensorX2;
            LEDSensor sensorY1;
            LEDSensor sensorY2;
            Motor motorX;
            Motor motorY;
        };

        struct InfoEX{
            Position pos;
            LEDSensor sensorX1;
            LEDSensor sensorX2;
            LEDSensor sensorY1;
            LEDSensor sensorY2;
            Motor motorX;
            Motor motorY;
            bool empty;
            bool open;
            bool close;
        };

        struct InfoDS{
            Position pos;
            LEDSensor sensorX1;
            LEDSensor sensorX2;
            LEDSensor sensorY1;
            LEDSensor sensorY2;
            Motor mtor;
            bool empty;
            bool open;
            bool close;
        };

        struct InfoCG{
            LEDSensor sensorUnfold1;
            LEDSensor sensorUnfold2;
            LEDSensor sensorFold1;
            LEDSensor sensorFold2;
            Motor motorFold;
            Motor motorJoin;
            Motor motorBelt;
            int empty;
            bool front;
            bool back;
        };


        dictionary<string, string> PollInfo;

        interface RobotInterface{

             //系统初始化
             bool initRobot(int timeout) throws RobotException;
             //开门
             void openDS() throws RobotException;
             //关门
             bool closeDS() throws RobotException;

             //获取当前升降机坐标
             int getPOS() throws RobotException;

             int goto(int pos) throws RobotException;
             //从某个货架取货
             bool fetch(string slotName) throws RobotException;
             //取物篮是否有货
             bool cgEmpty() throws RobotException;

             //将升降机移动到出物口
             int gotoDS() throws RobotException;
             //跑到某个货架
             int gotoRow(string row) throws RobotException;

             //读取QR代码
             string readQRCode();
             bool closeQRReader();

             //机体内灯
             void ledControl(bool on);
             void setTempreture(int t);
             int getTempreture();
             void compressorControl(bool on);


             bool openFrontDoor();

             void closeFrontDoor();



             //for m1   另外的机器接口
             Position getXY() throws RobotException;
             Position goXY(int x, int y, int spdx, int spdy , int thdx, int thdy, int timeout) throws RobotException;
             void gotoEX() throws RobotException;

             void closeDoors() throws RobotException;

             void foldCG() throws RobotException;
             void unfoldCG() throws RobotException;
             void rollBeltCG(bool outdir, int timeout) throws RobotException;
             void rollJoinMotorCG(int dir, int timeout) throws RobotException;

             //bool fetch(string slotName) throws RobotException;
             bool recycle() throws RobotException;

             //for CSJ   穿山甲的接口

             void gotoSlot(string slotName) throws RobotException;
             void openInnerDS() throws RobotException;
             void closeInnerDS() throws RobotException;

             void openOutterDS() throws RobotException;
             void closeOutterDS() throws RobotException;


                 void frontDoorLockerOff() throws RobotException;
             void frontDoorLockerOn() throws RobotException;

             void innerDoorLockerOff() throws RobotException;
             void innerDoorLockerOn() throws RobotException;



             void slot2DS(string slotname) throws RobotException;
             void DS2Slot(string slotname) throws RobotException;



             bool dispenseEmpty() throws RobotException;

             bool itemOverHeight() throws RobotException;

             bool detectItem(string slotName) throws RobotException;

             void initCG() throws RobotException;
             void initXY() throws RobotException;


             /*
                BACK_01_TOP_Y = KioskConfig().get('BACK_01_TOP_Y', 9673)
                BACK_01_TOP_X = KioskConfig().get('BACK_01_TOP_X', 67132)


                BACK_01_BOTTOM_X = KioskConfig().get('BACK_01_BOTTOM_X', 68263)
                BACK_01_BOTTOM_Y =KioskConfig().get('BACK_01_BOTTOM_Y', 50000)


                BACK_05_BOTTOM_X = KioskConfig().get('BACK_05_BOTTOM_X',11026)
                BACK_05_BOTTOM_Y =KioskConfig().get('BACK_05_BOTTOM_Y', 50000)

                #############################

                FRONT_01_TOP_X = KioskConfig().get('FRONT_01_TOP_X', 70605)
                FRONT_01_TOP_Y = KioskConfig().get('FRONT_01_TOP_Y', 9380-150)

                FRONT_01_BOTTOM_X = KioskConfig().get('FRONT_01_BOTTOM_X', 70876)
                FRONT_01_BOTTOM_Y =KioskConfig().get('FRONT_01_BOTTOM_Y', 53351)


                FRONT_02_TOP_X = KioskConfig().get('FRONT_02_TOP_X', 52827)
                FRONT_02_TOP_Y = KioskConfig().get('FRONT_02_TOP_Y', 9380-150)

                FRONT_02_BOTTOM_X = KioskConfig().get('FRONT_02_BOTTOM_X', 53366)
                FRONT_02_BOTTOM_Y = KioskConfig().get('FRONT_02_BOTTOM_Y', 53725-150)

                FRONT_04_BOTTOM_X = KioskConfig().get('FRONT_04_BOTTOM_X', 10262)
                FRONT_04_BOTTOM_Y = KioskConfig().get('FRONT_04_BOTTOM_Y',FRONT_02_BOTTOM_Y)

                #############################

                FETCH_OFFSET = KioskConfig().get('FETCH_OFFSET', 50)
                PUT_OFFSET = KioskConfig().get('PUT_OFFSET',-120)

                DISPENSE_X = KioskConfig().get('DISPENSE_X', 10232)
                DISPENSE_Y = KioskConfig().get('DISPENSE_Y', 24613)

             */
             void setParameter(string name, int value);

             int getParameter(string name);


             //low level cmd

             //int setOffsetX(int offset);
             //int getOffsetX();

             //int setOffsetY(int offset);
             //int getOffsetY();

             //int setOffsetCGFB(int offset);
             //int getOffsetCGFB();

             //int setOffsetCGRL(int offset);
             //int getOffsetCGRL();

             PollInfo  poll();


        };
    };
};

#endif

#ifndef __THYBOT_EXCEPTION__
#define __THYBOT_EXCEPTION__
module ThybotKioskService {

/**
* Base exception class
**/
exception KioskErrorBase {
    /**
    *error number
    **/
    int errno=-1;

    /**
    *description of the exception
    **/
    string reason;

    /**
    *error source
    **/
    optional(1) string source;
};


/**
* database exceptions
**/
exception RemoteCallException extends KioskErrorBase {

    };


/**
* database exceptions
**/
exception DataException extends KioskErrorBase {

    };


/**
* empty exceptions
**/
exception EmptyException extends KioskErrorBase {

    };





/**
*mechanical related exception
**/
exception RobotException extends KioskErrorBase {

    };

exception OperationTimeout extends RobotException {

    };

exception NoItem extends RobotException {

    };

exception FatalException extends RobotException {
};


exception FailException extends RobotException {
};


};

#endif
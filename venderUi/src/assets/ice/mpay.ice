#ifndef __THYBOT_MPAY__
#define __THYBOT_MPAY__
#include <exception.ice>

module ThybotKioskService {
    module MPayService {

    enum MPayType { WXQR, ALIPAYQR };
    enum MPaySTATE { NOTPAY, SUCCESS};

    struct MPayHandle{
        MPayType payType;
        string session;
        string codeurl;
        string tradeno;
    };

    interface MPayInterface{
        MPayHandle startSession( string session, MPayType payType, int totalFee, string data, int timeout) throws RemoteCallException;

        bool querySession(MPayHandle h ,int timeout) throws RemoteCallException;

        bool cancelCurrentSession();

        };
    };
};

#endif
// **********************************************************************
//
// Copyright (c) 2003-2016 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.3
//
// <auto-generated>
//
// Generated from file `exception.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var Slice = Ice.Slice;

    var ThybotKioskService = __M.module("ThybotKioskService");

    /**
     * Base exception class
     **/
    ThybotKioskService.KioskErrorBase = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            Ice.UserException.call(this, _cause);
            this.errno = errno !== undefined ? errno : -1;
            this.reason = reason !== undefined ? reason : "";
            this.source = source;
        },
        Ice.UserException,
        "ThybotKioskService::KioskErrorBase",
        function(__os)
        {
            __os.writeInt(this.errno);
            __os.writeString(this.reason);
            Ice.StringHelper.writeOpt(__os, 1, this.source);
        },
        function(__is)
        {
            this.errno = __is.readInt();
            this.reason = __is.readString();
            this.source = Ice.StringHelper.readOpt(__is, 1);
        },
        false,
        false);

    /**
     * database exceptions
     **/
    ThybotKioskService.RemoteCallException = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            ThybotKioskService.KioskErrorBase.call(this, errno, reason, source, _cause);
        },
        ThybotKioskService.KioskErrorBase,
        "ThybotKioskService::RemoteCallException",
        undefined, undefined,
        false,
        false);

    /**
     * database exceptions
     **/
    ThybotKioskService.DataException = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            ThybotKioskService.KioskErrorBase.call(this, errno, reason, source, _cause);
        },
        ThybotKioskService.KioskErrorBase,
        "ThybotKioskService::DataException",
        undefined, undefined,
        false,
        false);

    /**
     * empty exceptions
     **/
    ThybotKioskService.EmptyException = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            ThybotKioskService.KioskErrorBase.call(this, errno, reason, source, _cause);
        },
        ThybotKioskService.KioskErrorBase,
        "ThybotKioskService::EmptyException",
        undefined, undefined,
        false,
        false);

    /**
     * mechanical related exception
     **/
    ThybotKioskService.RobotException = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            ThybotKioskService.KioskErrorBase.call(this, errno, reason, source, _cause);
        },
        ThybotKioskService.KioskErrorBase,
        "ThybotKioskService::RobotException",
        undefined, undefined,
        false,
        false);

    ThybotKioskService.OperationTimeout = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            ThybotKioskService.RobotException.call(this, errno, reason, source, _cause);
        },
        ThybotKioskService.RobotException,
        "ThybotKioskService::OperationTimeout",
        undefined, undefined,
        false,
        false);

    ThybotKioskService.NoItem = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            ThybotKioskService.RobotException.call(this, errno, reason, source, _cause);
        },
        ThybotKioskService.RobotException,
        "ThybotKioskService::NoItem",
        undefined, undefined,
        false,
        false);

    ThybotKioskService.FatalException = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            ThybotKioskService.RobotException.call(this, errno, reason, source, _cause);
        },
        ThybotKioskService.RobotException,
        "ThybotKioskService::FatalException",
        undefined, undefined,
        false,
        false);

    ThybotKioskService.FailException = Slice.defineUserException(
        function(errno, reason, source, _cause)
        {
            ThybotKioskService.RobotException.call(this, errno, reason, source, _cause);
        },
        ThybotKioskService.RobotException,
        "ThybotKioskService::FailException",
        undefined, undefined,
        false,
        false);
    exports.ThybotKioskService = ThybotKioskService;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));

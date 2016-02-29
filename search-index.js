var searchIndex = {};
searchIndex["minject"] = {"doc":"# The minject-rs library\nThis library provides a simple API for injecting code (in the form of a DLL)\ninto another process on the Windows platform.","items":[[3,"Module","minject","A description of a module (DLL) to be injected into a process.",null,null],[3,"ModuleBuilder","","A module builder for a module without an initialization function.",null,null],[3,"ModuleBuilderWithInit","","A module builder for a module with an initialization function.",null,null],[11,"init","","Call the given initializer function after loading the module.",0,{"inputs":[{"name":"modulebuilder"},{"name":"n"}],"output":{"name":"modulebuilderwithinit"}}],[11,"unwrap","","Constructs a module and consumes this builder.",0,{"inputs":[{"name":"modulebuilder"}],"output":{"name":"module"}}],[11,"arg","","Adds an argument to the initializer invocation.",1,{"inputs":[{"name":"modulebuilderwithinit"},{"name":"t"}],"output":{"name":"modulebuilderwithinit"}}],[11,"unwrap","","Constructs a module and consumes this builder.",1,{"inputs":[{"name":"modulebuilderwithinit"}],"output":{"name":"module"}}],[11,"new","","Creates a new module definition builder given the path to a module.",2,{"inputs":[{"name":"p"}],"output":{"name":"modulebuilder"}}],[11,"from","","",2,{"inputs":[{"name":"modulebuilder"}],"output":{"name":"module"}}],[11,"from","","",2,{"inputs":[{"name":"modulebuilderwithinit"}],"output":{"name":"module"}}],[0,"process","","This module provides a drop-in replacement for most of the functionality\ninside the `std::process` module.",null,null],[3,"Child","minject::process","Representation of a running or exited child process.",null,null],[12,"stdin","","The handle for writing to the child&#39;s stdin, if it has been captured",3,null],[12,"stdout","","The handle for reading from the child&#39;s stdout, if it has been captured",3,null],[12,"stderr","","The handle for reading from the child&#39;s stderr, if it has been captured",3,null],[3,"ChildStdin","","A handle to a child process&#39;s stdin.",null,null],[3,"ChildStdout","","A handle to a child process&#39;s stdout.",null,null],[3,"ChildStderr","","A handle to a child process&#39;s stderr.",null,null],[3,"Command","","The `Command` type acts as a process builder, providing fine-grained control\nover how a new process should be spawned.",null,null],[3,"Output","","The output of a finished process.",null,null],[12,"status","","The status (exit code) of the process.",4,null],[12,"stdout","","The data that the process wrote to stdout.",4,null],[12,"stderr","","The data that the process wrote to stderr.",4,null],[3,"ExitStatus","","Describes the result of a process after it has terminated.",null,null],[3,"Stdio","","Describes what to do with a standard I/O stream for a child process.",null,null],[11,"kill","","Forces the child to exit.",3,{"inputs":[{"name":"child"}],"output":{"name":"result"}}],[11,"id","","Returns the OS-assigned process identifier associated with this child.",3,{"inputs":[{"name":"child"}],"output":{"name":"u32"}}],[11,"wait","","Waits for the child to exit completely, returning the status that it\nexited with. This function will continue to have the same return value\nafter it has been called at least once.",3,{"inputs":[{"name":"child"}],"output":{"name":"result"}}],[11,"wait_with_output","","Simultaneously waits for the child to exit and collect all remaining\noutput on the stdout/stderr handles, returning a `Output`\ninstance.",3,{"inputs":[{"name":"child"}],"output":{"name":"result"}}],[11,"as_raw_handle","","",3,{"inputs":[{"name":"child"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",3,{"inputs":[{"name":"child"}],"output":{"name":"rawhandle"}}],[11,"write","","",5,null],[11,"flush","","",5,{"inputs":[{"name":"childstdin"}],"output":{"name":"result"}}],[11,"as_raw_handle","","",5,{"inputs":[{"name":"childstdin"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",5,{"inputs":[{"name":"childstdin"}],"output":{"name":"rawhandle"}}],[11,"read","","",6,null],[11,"as_raw_handle","","",6,{"inputs":[{"name":"childstdout"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",6,{"inputs":[{"name":"childstdout"}],"output":{"name":"rawhandle"}}],[11,"read","","",7,null],[11,"as_raw_handle","","",7,{"inputs":[{"name":"childstderr"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",7,{"inputs":[{"name":"childstderr"}],"output":{"name":"rawhandle"}}],[11,"new","","Constructs a new `Command` for launching the program at\npath `program`, with the following default configuration:",8,{"inputs":[{"name":"s"}],"output":{"name":"command"}}],[11,"arg","","Add an argument to pass to the program.",8,{"inputs":[{"name":"command"},{"name":"s"}],"output":{"name":"command"}}],[11,"args","","Add multiple arguments to pass to the program.",8,null],[11,"env","","Inserts or updates an environment variable mapping.",8,{"inputs":[{"name":"command"},{"name":"k"},{"name":"v"}],"output":{"name":"command"}}],[11,"env_remove","","Removes an environment variable mapping.",8,{"inputs":[{"name":"command"},{"name":"k"}],"output":{"name":"command"}}],[11,"env_clear","","Clears the entire environment map for the child process.",8,{"inputs":[{"name":"command"}],"output":{"name":"command"}}],[11,"current_dir","","Sets the working directory for the child process.",8,{"inputs":[{"name":"command"},{"name":"p"}],"output":{"name":"command"}}],[11,"inject","","Injects a module (DLL) before the child process&#39;s main thread starts.",8,{"inputs":[{"name":"command"},{"name":"m"}],"output":{"name":"command"}}],[11,"stdin","","Configuration for the child process&#39;s stdin handle (file descriptor 0).",8,{"inputs":[{"name":"command"},{"name":"stdio"}],"output":{"name":"command"}}],[11,"stdout","","Configuration for the child process&#39;s stdout handle (file descriptor 1).",8,{"inputs":[{"name":"command"},{"name":"stdio"}],"output":{"name":"command"}}],[11,"stderr","","Configuration for the child process&#39;s stderr handle (file descriptor 2).",8,{"inputs":[{"name":"command"},{"name":"stdio"}],"output":{"name":"command"}}],[11,"spawn","","Executes the command as a child process, returning a handle to it.",8,{"inputs":[{"name":"command"}],"output":{"name":"result"}}],[11,"output","","Executes the command as a child process, waiting for it to finish and\ncollecting all of its output.",8,{"inputs":[{"name":"command"}],"output":{"name":"result"}}],[11,"status","","Executes a command as a child process, waiting for it to finish and\ncollecting its exit status.",8,{"inputs":[{"name":"command"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"command"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"output"}],"output":{"name":"output"}}],[11,"eq","","",4,{"inputs":[{"name":"output"},{"name":"output"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"output"},{"name":"output"}],"output":{"name":"bool"}}],[11,"fmt","","",9,{"inputs":[{"name":"exitstatus"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"exitstatus"}],"output":{"name":"exitstatus"}}],[11,"eq","","",9,{"inputs":[{"name":"exitstatus"},{"name":"exitstatus"}],"output":{"name":"bool"}}],[11,"ne","","",9,{"inputs":[{"name":"exitstatus"},{"name":"exitstatus"}],"output":{"name":"bool"}}],[11,"success","","Was termination successful? Success is defined as a zero exit status.",9,{"inputs":[{"name":"exitstatus"}],"output":{"name":"bool"}}],[11,"code","","Returns the exit code of the process as an `Option`.",9,{"inputs":[{"name":"exitstatus"}],"output":{"name":"option"}}],[11,"code_direct","","Returns the exit code of the process.",9,{"inputs":[{"name":"exitstatus"}],"output":{"name":"i32"}}],[11,"fmt","","",9,{"inputs":[{"name":"exitstatus"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"piped","","A new pipe should be arranged to connect the parent and child processes.",10,{"inputs":[],"output":{"name":"stdio"}}],[11,"inherit","","The child inherits from the corresponding parent descriptor.",10,{"inputs":[],"output":{"name":"stdio"}}],[11,"null","","This stream will be ignored. This is the equivalent of attaching the\nstream to `NUL`.",10,{"inputs":[],"output":{"name":"stdio"}}],[11,"from_raw_handle","","",10,{"inputs":[{"name":"rawhandle"}],"output":{"name":"stdio"}}],[14,"initializer!","minject","Creates a suitable initialization wrapper function around the given function.",null,null]],"paths":[[3,"ModuleBuilder"],[3,"ModuleBuilderWithInit"],[3,"Module"],[3,"Child"],[3,"Output"],[3,"ChildStdin"],[3,"ChildStdout"],[3,"ChildStderr"],[3,"Command"],[3,"ExitStatus"],[3,"Stdio"]]};
initSearch(searchIndex);

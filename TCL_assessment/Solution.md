### Sort Function

Suppose that you have a list of 10 numbers, this list contains the numbers from 0 - 9 which are randomly sorted.

The list reserves 10 bytes of memory, each number reserves one byte.

Write a TCL procedure, which takes this list as argument, and returns the list sorted in ascending way with a minimum number of iterations.

**NOTE: Don't use TCL built-in sort function.**

sortList :: { 3 6 8 7 0 1 4 2 9 5 } -> { 0 1 2 3 4 5 6 7 8 9 }

proc sortList {L} {...}

Example:

sortList { 3 6 8 7 0 1 4 2 9 5 }
=> { 0 1 2 3 4 5 6 7 8 9 }
```
proc sortList {L} {
    set n [llength $L]
    set sorted 0

    while {!$sorted} {
        set sorted 1
        for {set i 0} {$i < [expr {$n - 1}]} {incr i} {
            set current [lindex $L $i]
            set next [lindex $L [expr {$i + 1}]]

            if {$current > $next} {
                set sorted 0
                lset L $i $next
                lset L [expr {$i + 1}] $current
            }
        }
    }

    return $L
}

```

### Reverse Procedure

Write a TCL procedure that takes a string as an argument, and returns the results as a reversed string.

Example:

reverse { TCL is a Tool Command Language }
=> {  Language Command Tool a is TCL }

reverse { Welcome to you }
=> { you to Welcome }

```
proc reverse_string {input_string} {
    set words [split $input_string]
    set reversed_string ""

    foreach word [lreverse $words] {
        append reversed_string "$word "
    }

    return [string trim $reversed_string]
}

```

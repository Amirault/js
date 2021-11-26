describe.skip("array", () => {
  describe("splice", () => {
    it("should give the removed element", () => {
      const array = [0];
      expect(array.splice(0)).toEqual([0]);
    });

    it("should mutate (in place operation) the original", () => {
      const array = [0];
      array.splice(0);
      expect(array).toEqual([]);
    });

    describe("removing when having only one element on the array", () => {
      it("should remove the first element on start index = 0", () => {
        const array = [0];
        expect(array.splice(0)).toEqual([0]);
        expect(array).toEqual([]);
      });

      it("should remove no element on start index = length", () => {
        const array = [0];
        expect(array.splice(array.length)).toEqual([]);
        expect(array).toEqual([0]);
      });

      it("should remove no element on start index > length", () => {
        const array = [0];
        expect(array.splice(array.length + 1)).toEqual([]);
        expect(array).toEqual([0]);
      });

      it("should remove the element on start index < 0", () => {
        const array = [0];
        expect(array.splice(-100)).toEqual([0]);
        expect(array).toEqual([]);
      });

      it("should remove nothing on start index = 0 and deleteCount = 0", () => {
        const array = [0];
        expect(array.splice(0, 0)).toEqual([]);
        expect(array).toEqual([0]);
      });

      it("should remove the element on start index = 0 and deleteCount = 1", () => {
        const array = [0];
        expect(array.splice(0, 1)).toEqual([0]);
        expect(array).toEqual([]);
      });

      it("should remove the element on start index = 0 and deleteCount = 100", () => {
        const array = [0];
        expect(array.splice(0, 100)).toEqual([0]);
        expect(array).toEqual([]);
      });

      it("shoud not remove the element on start index = 0 and deleteCount = -1", () => {
        const array = [0];
        expect(array.splice(0, -100)).toEqual([]);
        expect(array).toEqual([0]);
      });
    });

    describe("removing when having multiple element on the array", () => {
      it("should remove all the elements on start index = 0", () => {
        const array = [0, 1, 2];
        expect(array.splice(0)).toEqual([0, 1, 2]);
        expect(array).toEqual([]);
      });

      it("should remove the tail elements on start index = 1", () => {
        const array = [0, 1, 2];
        expect(array.splice(1)).toEqual([1, 2]);
        expect(array).toEqual([0]);
      });

      it("should remove the head element on start index = 0 and deleteCount = 1", () => {
        const array = [0, 1, 2];
        expect(array.splice(0, 1)).toEqual([0]);
        expect(array).toEqual([1, 2]);
      });

      it("should the last element on start index = -1", () => {
        const array = [0, 1, 2];
        expect(array.splice(-1)).toEqual([2]);
        expect(array).toEqual([0, 1]);
      });

      it("should the two last element on start index = -2", () => {
        const array = [0, 1, 2];
        expect(array.splice(-2)).toEqual([1, 2]);
        expect(array).toEqual([0]);
      });

      it("should remove all the element on start index = -length or length", () => {
        const array = [0, 1, 2];
        expect(array.splice(-array.length)).toEqual([0, 1, 2]);
        expect(array).toEqual([]);
      });

      it("should remove two times the first element when applying successive splice", () => {
        const array = [0, 1, 2];
        expect(array.splice(0, 1)).toEqual([0]);
        expect(array).toEqual([1, 2]);
        expect(array.splice(0, 1)).toEqual([1]);
        expect(array).toEqual([2]);
      });
    });

    describe("remove with insertion", () => {
      it("should remove the first element and replace it", () => {
        const array = [0];
        expect(array.splice(0, 1, "newElement")).toEqual([0])
        expect(array).toEqual(["newElement"])
      })

      it("should remove nothing and insert in the middle", () => {
        const array = [0, 2];
        expect(array.splice(1, 0, 1)).toEqual([])
        expect(array).toEqual([0,1,2])
      })

      it("should remove all elements and replace all", () => {
        const array = ['A', 'B'];
        expect(array.splice(0, 2, 'X', 'X')).toEqual(['A', 'B'])
        expect(array).toEqual(['X', 'X'])
      })

      it("should insert element at the head", () => {
        const array = ['B', 'C'];
        expect(array.splice(0, 0, 'A')).toEqual([])
        expect(array).toEqual(['A', 'B', 'C'])
      })

      it("should insert element at the middle", () => {
        const array = ['A', 'C'];
        expect(array.splice(1, 0, 'B')).toEqual([])
        expect(array).toEqual(['A', 'B', 'C'])
      })

      it("should insert element at the end", () => {
        const array = ['A', 'B'];
        expect(array.splice(100, 0, 'C')).toEqual([])
        expect(array).toEqual(['A', 'B', 'C'])
      })

      it("should insert element starting by the end", () => {
        const array = ['A', 'C'];
        expect(array.splice(-1, 0, 'B')).toEqual([])
        expect(array).toEqual(['A', 'B', 'C'])
      })
    })

    describe("splice examples", () => {
      it.each`
        array     | startIndex | deletedElements | arrayAfterSplice
        ${[]}     | ${0}       | ${[]}           | ${[]}
        ${[0]}    | ${0}       | ${[0]}          | ${[]}
        ${[0, 1]} | ${0}       | ${[0, 1]}       | ${[]}
        ${[0]}    | ${1}       | ${[]}           | ${[0]}
        ${[0, 1]} | ${1}       | ${[1]}          | ${[0]}
        ${[0, 1]} | ${3}       | ${[]}           | ${[0, 1]}
        ${[0, 1]} | ${3}       | ${[]}           | ${[0, 1]}
        ${[0, 1]} | ${-1}      | ${[1]}          | ${[0]}
      `(
        "$array .splice( $startIndex ) give deletedElements: $deletedElements and arrayAfterSplice = $arrayAfterSplice",
        ({ array, startIndex, deletedElements, arrayAfterSplice }) => {
          expect(array.splice(startIndex)).toEqual(deletedElements);
          expect(array).toEqual(arrayAfterSplice);
        }
      );

      it.each`
        array     | startIndex | deleteCount | deletedElements | arrayAfterSplice
        ${[0, 1]} | ${0}       | ${-1}       | ${[]}           | ${[0, 1]}
        ${[0, 1]} | ${0}       | ${0}        | ${[]}           | ${[0, 1]}
        ${[0, 1]} | ${0}       | ${1}        | ${[0]}          | ${[1]}
        ${[0, 1]} | ${0}       | ${2}        | ${[0, 1]}       | ${[]}
        ${[0, 1]} | ${0}       | ${100}      | ${[0, 1]}       | ${[]}
        ${[0, 1]} | ${1}       | ${1}        | ${[1]}          | ${[0]}
      `(
        "$array .splice( $startIndex, $deleteCount ) give deletedElements: $deletedElements and arrayAfterSplice = $arrayAfterSplice",
        ({
          array,
          startIndex,
          deleteCount,
          deletedElements,
          arrayAfterSplice
        }) => {
          expect(array.splice(startIndex, deleteCount)).toEqual(
            deletedElements
          );
          expect(array).toEqual(arrayAfterSplice);
        }
      );
    });
  });
  describe("slice", () => {

    describe("no start and end of slice defined", () => {
      it("should have nothing when empty array", () => {
        expect([].slice()).toEqual([])
      })

      it("should not mutate (no inplace) when applying slice", () => {
        const array = [1,2];
        const sliceResult = array.slice(0);
        expect(sliceResult).toEqual([1, 2])
        expect(array).toEqual([1,2])
      })

      it("should have same array when no start and end defined", () => {
        expect([1, 2, 3].slice()).toEqual([1, 2, 3])
      })
    })

    describe("only start of slice defined", () => {
      it("should take all from start", () => {
        expect([1, 2, 3].slice(0)).toEqual([1, 2, 3])
      })

      it("should take last from start = length - 1", () => {
        expect([1, 2, 3].slice(length-1)).toEqual([3])
      })

      it("should all from start at middle", () => {
        expect([1, 2, 3].slice(1)).toEqual([2, 3])
      })
    })
    describe("start and end of slice defined", () => {
      it("should only take between : start <= elements < end", () => {
        const array = [1, 2, 3];
        expect(array.slice(1, 2)).toEqual([2])
      })

      it("should take nothing when same start and end", () => {
        const array = [1, 2, 3];
        expect(array.slice(1, 1)).toEqual([])
      })

      it("should take nothing when start > end", () => {
        const array = [1, 2, 3];
        expect(array.slice(2, 0)).toEqual([])
      })

      it("should take from start to the length + end when end < 0", () => {
        const array = [1, 2, 3];
        const end = -2
        expect(array.slice(0, end)).toEqual(array.slice(0, array.length + end))
      })

      it("should slice when start < 0 and end < 0 and start < end (index start by the end of the array) ", () => {
        const array = [1, 2, 3];
        expect(array.slice(-2, -1)).toEqual([2])
      })
    })

    describe("converting array", () => {
      it('should convert iterable object to array', () => {
        const iterableObject = {
          '0': 'zero',
          '1': 'one',
          '2': 'two',
          '3': 'three',
          '4': 'four',
          length: 5
        };
        expect(Array.prototype.slice.call(iterableObject)).toEqual(['zero', 'one', 'two', 'three', 'four'])
      })
    })
  })
});

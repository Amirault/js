describe("array", () => {
  describe("splice", () => {
    it("should give the removed element", () => {
      const array = [0];
      expect(array.splice(0)).toEqual([0]);
    });

    it("should mutate the original array", () => {
      const array = [0];
      array.splice(0);
      expect(array).toEqual([]);
    });

    describe("when having only one element on the array", () => {
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

    describe("when having multiple element on the array", () => {
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
});

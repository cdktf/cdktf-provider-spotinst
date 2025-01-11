# `oceancdRolloutSpec` Submodule <a name="`oceancdRolloutSpec` Submodule" id="@cdktf/provider-spotinst.oceancdRolloutSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdRolloutSpec <a name="OceancdRolloutSpec" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec spotinst_oceancd_rollout_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpec(scope: Construct, id: string, config: OceancdRolloutSpecConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig">OceancdRolloutSpecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig">OceancdRolloutSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy">putFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment">putSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments">putSpotDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic">putTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployment">resetSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployments">resetSpotDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetTraffic">resetTraffic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFailurePolicy` <a name="putFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy"></a>

```typescript
public putFailurePolicy(value: OceancdRolloutSpecFailurePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---

##### `putSpotDeployment` <a name="putSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment"></a>

```typescript
public putSpotDeployment(value: OceancdRolloutSpecSpotDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---

##### `putSpotDeployments` <a name="putSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments"></a>

```typescript
public putSpotDeployments(value: IResolvable | OceancdRolloutSpecSpotDeployments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>[]

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy"></a>

```typescript
public putStrategy(value: OceancdRolloutSpecStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---

##### `putTraffic` <a name="putTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic"></a>

```typescript
public putTraffic(value: OceancdRolloutSpecTraffic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetFailurePolicy"></a>

```typescript
public resetFailurePolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpotDeployment` <a name="resetSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployment"></a>

```typescript
public resetSpotDeployment(): void
```

##### `resetSpotDeployments` <a name="resetSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployments"></a>

```typescript
public resetSpotDeployments(): void
```

##### `resetTraffic` <a name="resetTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetTraffic"></a>

```typescript
public resetTraffic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

oceancdRolloutSpec.OceancdRolloutSpec.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceancdRolloutSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceancdRolloutSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceancdRolloutSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference">OceancdRolloutSpecFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployment">spotDeployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference">OceancdRolloutSpecSpotDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployments">spotDeployments</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList">OceancdRolloutSpecSpotDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference">OceancdRolloutSpecStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference">OceancdRolloutSpecTrafficOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicyInput">failurePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecNameInput">rolloutSpecNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentInput">spotDeploymentInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentsInput">spotDeploymentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategyInput">strategyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.trafficInput">trafficInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecName">rolloutSpecName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: OceancdRolloutSpecFailurePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference">OceancdRolloutSpecFailurePolicyOutputReference</a>

---

##### `spotDeployment`<sup>Required</sup> <a name="spotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployment"></a>

```typescript
public readonly spotDeployment: OceancdRolloutSpecSpotDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference">OceancdRolloutSpecSpotDeploymentOutputReference</a>

---

##### `spotDeployments`<sup>Required</sup> <a name="spotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployments"></a>

```typescript
public readonly spotDeployments: OceancdRolloutSpecSpotDeploymentsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList">OceancdRolloutSpecSpotDeploymentsList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategy"></a>

```typescript
public readonly strategy: OceancdRolloutSpecStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference">OceancdRolloutSpecStrategyOutputReference</a>

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.traffic"></a>

```typescript
public readonly traffic: OceancdRolloutSpecTrafficOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference">OceancdRolloutSpecTrafficOutputReference</a>

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicyInput"></a>

```typescript
public readonly failurePolicyInput: OceancdRolloutSpecFailurePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `rolloutSpecNameInput`<sup>Optional</sup> <a name="rolloutSpecNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecNameInput"></a>

```typescript
public readonly rolloutSpecNameInput: string;
```

- *Type:* string

---

##### `spotDeploymentInput`<sup>Optional</sup> <a name="spotDeploymentInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentInput"></a>

```typescript
public readonly spotDeploymentInput: OceancdRolloutSpecSpotDeployment;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---

##### `spotDeploymentsInput`<sup>Optional</sup> <a name="spotDeploymentsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentsInput"></a>

```typescript
public readonly spotDeploymentsInput: IResolvable | OceancdRolloutSpecSpotDeployments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>[]

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategyInput"></a>

```typescript
public readonly strategyInput: OceancdRolloutSpecStrategy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---

##### `trafficInput`<sup>Optional</sup> <a name="trafficInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.trafficInput"></a>

```typescript
public readonly trafficInput: OceancdRolloutSpecTraffic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rolloutSpecName`<sup>Required</sup> <a name="rolloutSpecName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecName"></a>

```typescript
public readonly rolloutSpecName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdRolloutSpecConfig <a name="OceancdRolloutSpecConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecConfig: oceancdRolloutSpec.OceancdRolloutSpecConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.rolloutSpecName">rolloutSpecName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployment">spotDeployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | spot_deployment block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployments">spotDeployments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>[]</code> | spot_deployments block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | traffic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rolloutSpecName`<sup>Required</sup> <a name="rolloutSpecName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.rolloutSpecName"></a>

```typescript
public readonly rolloutSpecName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.strategy"></a>

```typescript
public readonly strategy: OceancdRolloutSpecStrategy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#strategy OceancdRolloutSpec#strategy}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: OceancdRolloutSpecFailurePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#failure_policy OceancdRolloutSpec#failure_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spotDeployment`<sup>Optional</sup> <a name="spotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployment"></a>

```typescript
public readonly spotDeployment: OceancdRolloutSpecSpotDeployment;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

spot_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployment OceancdRolloutSpec#spot_deployment}

---

##### `spotDeployments`<sup>Optional</sup> <a name="spotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployments"></a>

```typescript
public readonly spotDeployments: IResolvable | OceancdRolloutSpecSpotDeployments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>[]

spot_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployments OceancdRolloutSpec#spot_deployments}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.traffic"></a>

```typescript
public readonly traffic: OceancdRolloutSpecTraffic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#traffic OceancdRolloutSpec#traffic}

---

### OceancdRolloutSpecFailurePolicy <a name="OceancdRolloutSpecFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecFailurePolicy: oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}.

---

### OceancdRolloutSpecSpotDeployment <a name="OceancdRolloutSpecSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecSpotDeployment: oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentClusterId">spotDeploymentClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentName">spotDeploymentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentNamespace">spotDeploymentNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}. |

---

##### `spotDeploymentClusterId`<sup>Optional</sup> <a name="spotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentClusterId"></a>

```typescript
public readonly spotDeploymentClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}.

---

##### `spotDeploymentName`<sup>Optional</sup> <a name="spotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentName"></a>

```typescript
public readonly spotDeploymentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}.

---

##### `spotDeploymentNamespace`<sup>Optional</sup> <a name="spotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentNamespace"></a>

```typescript
public readonly spotDeploymentNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}.

---

### OceancdRolloutSpecSpotDeployments <a name="OceancdRolloutSpecSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecSpotDeployments: oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsClusterId">spotDeploymentsClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsName">spotDeploymentsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsNamespace">spotDeploymentsNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}. |

---

##### `spotDeploymentsClusterId`<sup>Optional</sup> <a name="spotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsClusterId"></a>

```typescript
public readonly spotDeploymentsClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}.

---

##### `spotDeploymentsName`<sup>Optional</sup> <a name="spotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsName"></a>

```typescript
public readonly spotDeploymentsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}.

---

##### `spotDeploymentsNamespace`<sup>Optional</sup> <a name="spotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsNamespace"></a>

```typescript
public readonly spotDeploymentsNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}.

---

### OceancdRolloutSpecStrategy <a name="OceancdRolloutSpecStrategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecStrategy: oceancdRolloutSpec.OceancdRolloutSpecStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.strategyName">strategyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.args">args</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>[]</code> | args block. |

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.strategyName"></a>

```typescript
public readonly strategyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.args"></a>

```typescript
public readonly args: IResolvable | OceancdRolloutSpecStrategyArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>[]

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#args OceancdRolloutSpec#args}

---

### OceancdRolloutSpecStrategyArgs <a name="OceancdRolloutSpecStrategyArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecStrategyArgs: oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argName">argName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argValue">argValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | value_from block. |

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argName"></a>

```typescript
public readonly argName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}.

---

##### `argValue`<sup>Optional</sup> <a name="argValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argValue"></a>

```typescript
public readonly argValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.valueFrom"></a>

```typescript
public readonly valueFrom: OceancdRolloutSpecStrategyArgsValueFrom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#value_from OceancdRolloutSpec#value_from}

---

### OceancdRolloutSpecStrategyArgsValueFrom <a name="OceancdRolloutSpecStrategyArgsValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecStrategyArgsValueFrom: oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.property.fieldRef">fieldRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | field_ref block. |

---

##### `fieldRef`<sup>Required</sup> <a name="fieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.property.fieldRef"></a>

```typescript
public readonly fieldRef: OceancdRolloutSpecStrategyArgsValueFromFieldRef;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#field_ref OceancdRolloutSpec#field_ref}

---

### OceancdRolloutSpecStrategyArgsValueFromFieldRef <a name="OceancdRolloutSpecStrategyArgsValueFromFieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecStrategyArgsValueFromFieldRef: oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.property.fieldPath">fieldPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}.

---

### OceancdRolloutSpecTraffic <a name="OceancdRolloutSpecTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTraffic: oceancdRolloutSpec.OceancdRolloutSpecTraffic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.ambassador">ambassador</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | ambassador block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.canaryService">canaryService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.istio">istio</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | istio block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.nginx">nginx</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | nginx block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.pingPong">pingPong</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | ping_pong block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.smi">smi</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | smi block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.stableService">stableService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}. |

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.alb"></a>

```typescript
public readonly alb: OceancdRolloutSpecTrafficAlb;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#alb OceancdRolloutSpec#alb}

---

##### `ambassador`<sup>Optional</sup> <a name="ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.ambassador"></a>

```typescript
public readonly ambassador: OceancdRolloutSpecTrafficAmbassador;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

ambassador block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#ambassador OceancdRolloutSpec#ambassador}

---

##### `canaryService`<sup>Optional</sup> <a name="canaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.canaryService"></a>

```typescript
public readonly canaryService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}.

---

##### `istio`<sup>Optional</sup> <a name="istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.istio"></a>

```typescript
public readonly istio: OceancdRolloutSpecTrafficIstio;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#istio OceancdRolloutSpec#istio}

---

##### `nginx`<sup>Optional</sup> <a name="nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.nginx"></a>

```typescript
public readonly nginx: OceancdRolloutSpecTrafficNginx;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

nginx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#nginx OceancdRolloutSpec#nginx}

---

##### `pingPong`<sup>Optional</sup> <a name="pingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.pingPong"></a>

```typescript
public readonly pingPong: OceancdRolloutSpecTrafficPingPong;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

ping_pong block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#ping_pong OceancdRolloutSpec#ping_pong}

---

##### `smi`<sup>Optional</sup> <a name="smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.smi"></a>

```typescript
public readonly smi: OceancdRolloutSpecTrafficSmi;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

smi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#smi OceancdRolloutSpec#smi}

---

##### `stableService`<sup>Optional</sup> <a name="stableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.stableService"></a>

```typescript
public readonly stableService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}.

---

### OceancdRolloutSpecTrafficAlb <a name="OceancdRolloutSpecTrafficAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficAlb: oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albIngress">albIngress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albRootService">albRootService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.servicePort">servicePort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albAnnotationPrefix">albAnnotationPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.stickinessConfig">stickinessConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | stickiness_config block. |

---

##### `albIngress`<sup>Required</sup> <a name="albIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albIngress"></a>

```typescript
public readonly albIngress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}.

---

##### `albRootService`<sup>Required</sup> <a name="albRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albRootService"></a>

```typescript
public readonly albRootService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}.

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.servicePort"></a>

```typescript
public readonly servicePort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}.

---

##### `albAnnotationPrefix`<sup>Optional</sup> <a name="albAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albAnnotationPrefix"></a>

```typescript
public readonly albAnnotationPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}.

---

##### `stickinessConfig`<sup>Optional</sup> <a name="stickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.stickinessConfig"></a>

```typescript
public readonly stickinessConfig: OceancdRolloutSpecTrafficAlbStickinessConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

stickiness_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#stickiness_config OceancdRolloutSpec#stickiness_config}

---

### OceancdRolloutSpecTrafficAlbStickinessConfig <a name="OceancdRolloutSpecTrafficAlbStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficAlbStickinessConfig: oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}. |

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}.

---

### OceancdRolloutSpecTrafficAmbassador <a name="OceancdRolloutSpecTrafficAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficAmbassador: oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.property.mappings">mappings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}. |

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.property.mappings"></a>

```typescript
public readonly mappings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}.

---

### OceancdRolloutSpecTrafficIstio <a name="OceancdRolloutSpecTrafficIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficIstio: oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.virtualServices">virtualServices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>[]</code> | virtual_services block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.destinationRule">destinationRule</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | destination_rule block. |

---

##### `virtualServices`<sup>Required</sup> <a name="virtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.virtualServices"></a>

```typescript
public readonly virtualServices: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>[]

virtual_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#virtual_services OceancdRolloutSpec#virtual_services}

---

##### `destinationRule`<sup>Optional</sup> <a name="destinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.destinationRule"></a>

```typescript
public readonly destinationRule: OceancdRolloutSpecTrafficIstioDestinationRule;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

destination_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#destination_rule OceancdRolloutSpec#destination_rule}

---

### OceancdRolloutSpecTrafficIstioDestinationRule <a name="OceancdRolloutSpecTrafficIstioDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficIstioDestinationRule: oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.canarySubsetName">canarySubsetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.destinationRuleName">destinationRuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.stableSubsetName">stableSubsetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}. |

---

##### `canarySubsetName`<sup>Required</sup> <a name="canarySubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.canarySubsetName"></a>

```typescript
public readonly canarySubsetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}.

---

##### `destinationRuleName`<sup>Required</sup> <a name="destinationRuleName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.destinationRuleName"></a>

```typescript
public readonly destinationRuleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}.

---

##### `stableSubsetName`<sup>Required</sup> <a name="stableSubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.stableSubsetName"></a>

```typescript
public readonly stableSubsetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}.

---

### OceancdRolloutSpecTrafficIstioVirtualServices <a name="OceancdRolloutSpecTrafficIstioVirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficIstioVirtualServices: oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.tlsRoutes">tlsRoutes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>[]</code> | tls_routes block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceRoutes">virtualServiceRoutes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}. |

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}.

---

##### `tlsRoutes`<sup>Optional</sup> <a name="tlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.tlsRoutes"></a>

```typescript
public readonly tlsRoutes: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>[]

tls_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#tls_routes OceancdRolloutSpec#tls_routes}

---

##### `virtualServiceRoutes`<sup>Optional</sup> <a name="virtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceRoutes"></a>

```typescript
public readonly virtualServiceRoutes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}.

---

### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes: oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.sniHosts">sniHosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}.

---

##### `sniHosts`<sup>Optional</sup> <a name="sniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.sniHosts"></a>

```typescript
public readonly sniHosts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}.

---

### OceancdRolloutSpecTrafficNginx <a name="OceancdRolloutSpecTrafficNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficNginx: oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.stableIngress">stableIngress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.additionalIngressAnnotation">additionalIngressAnnotation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | additional_ingress_annotation block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.nginxAnnotationPrefix">nginxAnnotationPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}. |

---

##### `stableIngress`<sup>Required</sup> <a name="stableIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.stableIngress"></a>

```typescript
public readonly stableIngress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}.

---

##### `additionalIngressAnnotation`<sup>Optional</sup> <a name="additionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.additionalIngressAnnotation"></a>

```typescript
public readonly additionalIngressAnnotation: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

additional_ingress_annotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#additional_ingress_annotation OceancdRolloutSpec#additional_ingress_annotation}

---

##### `nginxAnnotationPrefix`<sup>Optional</sup> <a name="nginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.nginxAnnotationPrefix"></a>

```typescript
public readonly nginxAnnotationPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}.

---

### OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation <a name="OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation: oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.canaryByHeader">canaryByHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.key1">key1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}. |

---

##### `canaryByHeader`<sup>Optional</sup> <a name="canaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.canaryByHeader"></a>

```typescript
public readonly canaryByHeader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}.

---

##### `key1`<sup>Optional</sup> <a name="key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.key1"></a>

```typescript
public readonly key1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}.

---

### OceancdRolloutSpecTrafficPingPong <a name="OceancdRolloutSpecTrafficPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficPingPong: oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pingService">pingService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pongService">pongService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}. |

---

##### `pingService`<sup>Required</sup> <a name="pingService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pingService"></a>

```typescript
public readonly pingService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}.

---

##### `pongService`<sup>Required</sup> <a name="pongService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pongService"></a>

```typescript
public readonly pongService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}.

---

### OceancdRolloutSpecTrafficSmi <a name="OceancdRolloutSpecTrafficSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

const oceancdRolloutSpecTrafficSmi: oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.smiRootService">smiRootService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.trafficSplitName">trafficSplitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}. |

---

##### `smiRootService`<sup>Optional</sup> <a name="smiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.smiRootService"></a>

```typescript
public readonly smiRootService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}.

---

##### `trafficSplitName`<sup>Optional</sup> <a name="trafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.trafficSplitName"></a>

```typescript
public readonly trafficSplitName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.206.0/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdRolloutSpecFailurePolicyOutputReference <a name="OceancdRolloutSpecFailurePolicyOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecFailurePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---


### OceancdRolloutSpecSpotDeploymentOutputReference <a name="OceancdRolloutSpecSpotDeploymentOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentClusterId">resetSpotDeploymentClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentName">resetSpotDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentNamespace">resetSpotDeploymentNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpotDeploymentClusterId` <a name="resetSpotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentClusterId"></a>

```typescript
public resetSpotDeploymentClusterId(): void
```

##### `resetSpotDeploymentName` <a name="resetSpotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentName"></a>

```typescript
public resetSpotDeploymentName(): void
```

##### `resetSpotDeploymentNamespace` <a name="resetSpotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentNamespace"></a>

```typescript
public resetSpotDeploymentNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterIdInput">spotDeploymentClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNameInput">spotDeploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespaceInput">spotDeploymentNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterId">spotDeploymentClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentName">spotDeploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespace">spotDeploymentNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spotDeploymentClusterIdInput`<sup>Optional</sup> <a name="spotDeploymentClusterIdInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterIdInput"></a>

```typescript
public readonly spotDeploymentClusterIdInput: string;
```

- *Type:* string

---

##### `spotDeploymentNameInput`<sup>Optional</sup> <a name="spotDeploymentNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNameInput"></a>

```typescript
public readonly spotDeploymentNameInput: string;
```

- *Type:* string

---

##### `spotDeploymentNamespaceInput`<sup>Optional</sup> <a name="spotDeploymentNamespaceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespaceInput"></a>

```typescript
public readonly spotDeploymentNamespaceInput: string;
```

- *Type:* string

---

##### `spotDeploymentClusterId`<sup>Required</sup> <a name="spotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterId"></a>

```typescript
public readonly spotDeploymentClusterId: string;
```

- *Type:* string

---

##### `spotDeploymentName`<sup>Required</sup> <a name="spotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentName"></a>

```typescript
public readonly spotDeploymentName: string;
```

- *Type:* string

---

##### `spotDeploymentNamespace`<sup>Required</sup> <a name="spotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespace"></a>

```typescript
public readonly spotDeploymentNamespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecSpotDeployment;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---


### OceancdRolloutSpecSpotDeploymentsList <a name="OceancdRolloutSpecSpotDeploymentsList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get"></a>

```typescript
public get(index: number): OceancdRolloutSpecSpotDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdRolloutSpecSpotDeployments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>[]

---


### OceancdRolloutSpecSpotDeploymentsOutputReference <a name="OceancdRolloutSpecSpotDeploymentsOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsClusterId">resetSpotDeploymentsClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsName">resetSpotDeploymentsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsNamespace">resetSpotDeploymentsNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpotDeploymentsClusterId` <a name="resetSpotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsClusterId"></a>

```typescript
public resetSpotDeploymentsClusterId(): void
```

##### `resetSpotDeploymentsName` <a name="resetSpotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsName"></a>

```typescript
public resetSpotDeploymentsName(): void
```

##### `resetSpotDeploymentsNamespace` <a name="resetSpotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsNamespace"></a>

```typescript
public resetSpotDeploymentsNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterIdInput">spotDeploymentsClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNameInput">spotDeploymentsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespaceInput">spotDeploymentsNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterId">spotDeploymentsClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsName">spotDeploymentsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespace">spotDeploymentsNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spotDeploymentsClusterIdInput`<sup>Optional</sup> <a name="spotDeploymentsClusterIdInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterIdInput"></a>

```typescript
public readonly spotDeploymentsClusterIdInput: string;
```

- *Type:* string

---

##### `spotDeploymentsNameInput`<sup>Optional</sup> <a name="spotDeploymentsNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNameInput"></a>

```typescript
public readonly spotDeploymentsNameInput: string;
```

- *Type:* string

---

##### `spotDeploymentsNamespaceInput`<sup>Optional</sup> <a name="spotDeploymentsNamespaceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespaceInput"></a>

```typescript
public readonly spotDeploymentsNamespaceInput: string;
```

- *Type:* string

---

##### `spotDeploymentsClusterId`<sup>Required</sup> <a name="spotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterId"></a>

```typescript
public readonly spotDeploymentsClusterId: string;
```

- *Type:* string

---

##### `spotDeploymentsName`<sup>Required</sup> <a name="spotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsName"></a>

```typescript
public readonly spotDeploymentsName: string;
```

- *Type:* string

---

##### `spotDeploymentsNamespace`<sup>Required</sup> <a name="spotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespace"></a>

```typescript
public readonly spotDeploymentsNamespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdRolloutSpecSpotDeployments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>

---


### OceancdRolloutSpecStrategyArgsList <a name="OceancdRolloutSpecStrategyArgsList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get"></a>

```typescript
public get(index: number): OceancdRolloutSpecStrategyArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdRolloutSpecStrategyArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>[]

---


### OceancdRolloutSpecStrategyArgsOutputReference <a name="OceancdRolloutSpecStrategyArgsOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom">putValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetArgValue">resetArgValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueFrom` <a name="putValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom"></a>

```typescript
public putValueFrom(value: OceancdRolloutSpecStrategyArgsValueFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---

##### `resetArgValue` <a name="resetArgValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetArgValue"></a>

```typescript
public resetArgValue(): void
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetValueFrom"></a>

```typescript
public resetValueFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference">OceancdRolloutSpecStrategyArgsValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argNameInput">argNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValueInput">argValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argName">argName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValue">argValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: OceancdRolloutSpecStrategyArgsValueFromOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference">OceancdRolloutSpecStrategyArgsValueFromOutputReference</a>

---

##### `argNameInput`<sup>Optional</sup> <a name="argNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argNameInput"></a>

```typescript
public readonly argNameInput: string;
```

- *Type:* string

---

##### `argValueInput`<sup>Optional</sup> <a name="argValueInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValueInput"></a>

```typescript
public readonly argValueInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: OceancdRolloutSpecStrategyArgsValueFrom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argName"></a>

```typescript
public readonly argName: string;
```

- *Type:* string

---

##### `argValue`<sup>Required</sup> <a name="argValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValue"></a>

```typescript
public readonly argValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdRolloutSpecStrategyArgs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>

---


### OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference <a name="OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecStrategyArgsValueFromFieldRef;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---


### OceancdRolloutSpecStrategyArgsValueFromOutputReference <a name="OceancdRolloutSpecStrategyArgsValueFromOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef">putFieldRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldRef` <a name="putFieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef"></a>

```typescript
public putFieldRef(value: OceancdRolloutSpecStrategyArgsValueFromFieldRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRef">fieldRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference">OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRefInput">fieldRefInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldRef`<sup>Required</sup> <a name="fieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRef"></a>

```typescript
public readonly fieldRef: OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference">OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference</a>

---

##### `fieldRefInput`<sup>Optional</sup> <a name="fieldRefInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRefInput"></a>

```typescript
public readonly fieldRefInput: OceancdRolloutSpecStrategyArgsValueFromFieldRef;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecStrategyArgsValueFrom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---


### OceancdRolloutSpecStrategyOutputReference <a name="OceancdRolloutSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs">putArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArgs` <a name="putArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs"></a>

```typescript
public putArgs(value: IResolvable | OceancdRolloutSpecStrategyArgs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.args">args</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList">OceancdRolloutSpecStrategyArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.argsInput">argsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyNameInput">strategyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyName">strategyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.args"></a>

```typescript
public readonly args: OceancdRolloutSpecStrategyArgsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList">OceancdRolloutSpecStrategyArgsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: IResolvable | OceancdRolloutSpecStrategyArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>[]

---

##### `strategyNameInput`<sup>Optional</sup> <a name="strategyNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyNameInput"></a>

```typescript
public readonly strategyNameInput: string;
```

- *Type:* string

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyName"></a>

```typescript
public readonly strategyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecStrategy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---


### OceancdRolloutSpecTrafficAlbOutputReference <a name="OceancdRolloutSpecTrafficAlbOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig">putStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetAlbAnnotationPrefix">resetAlbAnnotationPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetStickinessConfig">resetStickinessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStickinessConfig` <a name="putStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig"></a>

```typescript
public putStickinessConfig(value: OceancdRolloutSpecTrafficAlbStickinessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---

##### `resetAlbAnnotationPrefix` <a name="resetAlbAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetAlbAnnotationPrefix"></a>

```typescript
public resetAlbAnnotationPrefix(): void
```

##### `resetStickinessConfig` <a name="resetStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetStickinessConfig"></a>

```typescript
public resetStickinessConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfig">stickinessConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference">OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefixInput">albAnnotationPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngressInput">albIngressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootServiceInput">albRootServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePortInput">servicePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfigInput">stickinessConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefix">albAnnotationPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngress">albIngress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootService">albRootService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePort">servicePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stickinessConfig`<sup>Required</sup> <a name="stickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfig"></a>

```typescript
public readonly stickinessConfig: OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference">OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference</a>

---

##### `albAnnotationPrefixInput`<sup>Optional</sup> <a name="albAnnotationPrefixInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefixInput"></a>

```typescript
public readonly albAnnotationPrefixInput: string;
```

- *Type:* string

---

##### `albIngressInput`<sup>Optional</sup> <a name="albIngressInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngressInput"></a>

```typescript
public readonly albIngressInput: string;
```

- *Type:* string

---

##### `albRootServiceInput`<sup>Optional</sup> <a name="albRootServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootServiceInput"></a>

```typescript
public readonly albRootServiceInput: string;
```

- *Type:* string

---

##### `servicePortInput`<sup>Optional</sup> <a name="servicePortInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePortInput"></a>

```typescript
public readonly servicePortInput: number;
```

- *Type:* number

---

##### `stickinessConfigInput`<sup>Optional</sup> <a name="stickinessConfigInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfigInput"></a>

```typescript
public readonly stickinessConfigInput: OceancdRolloutSpecTrafficAlbStickinessConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---

##### `albAnnotationPrefix`<sup>Required</sup> <a name="albAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefix"></a>

```typescript
public readonly albAnnotationPrefix: string;
```

- *Type:* string

---

##### `albIngress`<sup>Required</sup> <a name="albIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngress"></a>

```typescript
public readonly albIngress: string;
```

- *Type:* string

---

##### `albRootService`<sup>Required</sup> <a name="albRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootService"></a>

```typescript
public readonly albRootService: string;
```

- *Type:* string

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePort"></a>

```typescript
public readonly servicePort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficAlb;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---


### OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference <a name="OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetDurationSeconds"></a>

```typescript
public resetDurationSeconds(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficAlbStickinessConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---


### OceancdRolloutSpecTrafficAmbassadorOutputReference <a name="OceancdRolloutSpecTrafficAmbassadorOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappingsInput">mappingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappings">mappings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappingsInput"></a>

```typescript
public readonly mappingsInput: string[];
```

- *Type:* string[]

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappings"></a>

```typescript
public readonly mappings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficAmbassador;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---


### OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference <a name="OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetNameInput">canarySubsetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleNameInput">destinationRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetNameInput">stableSubsetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetName">canarySubsetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleName">destinationRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetName">stableSubsetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canarySubsetNameInput`<sup>Optional</sup> <a name="canarySubsetNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetNameInput"></a>

```typescript
public readonly canarySubsetNameInput: string;
```

- *Type:* string

---

##### `destinationRuleNameInput`<sup>Optional</sup> <a name="destinationRuleNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleNameInput"></a>

```typescript
public readonly destinationRuleNameInput: string;
```

- *Type:* string

---

##### `stableSubsetNameInput`<sup>Optional</sup> <a name="stableSubsetNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetNameInput"></a>

```typescript
public readonly stableSubsetNameInput: string;
```

- *Type:* string

---

##### `canarySubsetName`<sup>Required</sup> <a name="canarySubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetName"></a>

```typescript
public readonly canarySubsetName: string;
```

- *Type:* string

---

##### `destinationRuleName`<sup>Required</sup> <a name="destinationRuleName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleName"></a>

```typescript
public readonly destinationRuleName: string;
```

- *Type:* string

---

##### `stableSubsetName`<sup>Required</sup> <a name="stableSubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetName"></a>

```typescript
public readonly stableSubsetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficIstioDestinationRule;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---


### OceancdRolloutSpecTrafficIstioOutputReference <a name="OceancdRolloutSpecTrafficIstioOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule">putDestinationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices">putVirtualServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resetDestinationRule">resetDestinationRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationRule` <a name="putDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule"></a>

```typescript
public putDestinationRule(value: OceancdRolloutSpecTrafficIstioDestinationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---

##### `putVirtualServices` <a name="putVirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices"></a>

```typescript
public putVirtualServices(value: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>[]

---

##### `resetDestinationRule` <a name="resetDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resetDestinationRule"></a>

```typescript
public resetDestinationRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRule">destinationRule</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference">OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServices">virtualServices</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList">OceancdRolloutSpecTrafficIstioVirtualServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRuleInput">destinationRuleInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServicesInput">virtualServicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationRule`<sup>Required</sup> <a name="destinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRule"></a>

```typescript
public readonly destinationRule: OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference">OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference</a>

---

##### `virtualServices`<sup>Required</sup> <a name="virtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServices"></a>

```typescript
public readonly virtualServices: OceancdRolloutSpecTrafficIstioVirtualServicesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList">OceancdRolloutSpecTrafficIstioVirtualServicesList</a>

---

##### `destinationRuleInput`<sup>Optional</sup> <a name="destinationRuleInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRuleInput"></a>

```typescript
public readonly destinationRuleInput: OceancdRolloutSpecTrafficIstioDestinationRule;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---

##### `virtualServicesInput`<sup>Optional</sup> <a name="virtualServicesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServicesInput"></a>

```typescript
public readonly virtualServicesInput: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficIstio;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---


### OceancdRolloutSpecTrafficIstioVirtualServicesList <a name="OceancdRolloutSpecTrafficIstioVirtualServicesList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get"></a>

```typescript
public get(index: number): OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>[]

---


### OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference <a name="OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes">putTlsRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetTlsRoutes">resetTlsRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetVirtualServiceRoutes">resetVirtualServiceRoutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTlsRoutes` <a name="putTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes"></a>

```typescript
public putTlsRoutes(value: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>[]

---

##### `resetTlsRoutes` <a name="resetTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetTlsRoutes"></a>

```typescript
public resetTlsRoutes(): void
```

##### `resetVirtualServiceRoutes` <a name="resetVirtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetVirtualServiceRoutes"></a>

```typescript
public resetVirtualServiceRoutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutes">tlsRoutes</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutesInput">tlsRoutesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceNameInput">virtualServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutesInput">virtualServiceRoutesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutes">virtualServiceRoutes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tlsRoutes`<sup>Required</sup> <a name="tlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutes"></a>

```typescript
public readonly tlsRoutes: OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList</a>

---

##### `tlsRoutesInput`<sup>Optional</sup> <a name="tlsRoutesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutesInput"></a>

```typescript
public readonly tlsRoutesInput: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>[]

---

##### `virtualServiceNameInput`<sup>Optional</sup> <a name="virtualServiceNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceNameInput"></a>

```typescript
public readonly virtualServiceNameInput: string;
```

- *Type:* string

---

##### `virtualServiceRoutesInput`<sup>Optional</sup> <a name="virtualServiceRoutesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutesInput"></a>

```typescript
public readonly virtualServiceRoutesInput: string[];
```

- *Type:* string[]

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

---

##### `virtualServiceRoutes`<sup>Required</sup> <a name="virtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutes"></a>

```typescript
public readonly virtualServiceRoutes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>

---


### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get"></a>

```typescript
public get(index: number): OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>[]

---


### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetSniHosts">resetSniHosts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSniHosts` <a name="resetSniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetSniHosts"></a>

```typescript
public resetSniHosts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHostsInput">sniHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHosts">sniHosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `sniHostsInput`<sup>Optional</sup> <a name="sniHostsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHostsInput"></a>

```typescript
public readonly sniHostsInput: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `sniHosts`<sup>Required</sup> <a name="sniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHosts"></a>

```typescript
public readonly sniHosts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>

---


### OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference <a name="OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetCanaryByHeader">resetCanaryByHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetKey1">resetKey1</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCanaryByHeader` <a name="resetCanaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetCanaryByHeader"></a>

```typescript
public resetCanaryByHeader(): void
```

##### `resetKey1` <a name="resetKey1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetKey1"></a>

```typescript
public resetKey1(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeaderInput">canaryByHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1Input">key1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeader">canaryByHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1">key1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canaryByHeaderInput`<sup>Optional</sup> <a name="canaryByHeaderInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeaderInput"></a>

```typescript
public readonly canaryByHeaderInput: string;
```

- *Type:* string

---

##### `key1Input`<sup>Optional</sup> <a name="key1Input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1Input"></a>

```typescript
public readonly key1Input: string;
```

- *Type:* string

---

##### `canaryByHeader`<sup>Required</sup> <a name="canaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeader"></a>

```typescript
public readonly canaryByHeader: string;
```

- *Type:* string

---

##### `key1`<sup>Required</sup> <a name="key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1"></a>

```typescript
public readonly key1: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---


### OceancdRolloutSpecTrafficNginxOutputReference <a name="OceancdRolloutSpecTrafficNginxOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation">putAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetAdditionalIngressAnnotation">resetAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetNginxAnnotationPrefix">resetNginxAnnotationPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalIngressAnnotation` <a name="putAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation"></a>

```typescript
public putAdditionalIngressAnnotation(value: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---

##### `resetAdditionalIngressAnnotation` <a name="resetAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetAdditionalIngressAnnotation"></a>

```typescript
public resetAdditionalIngressAnnotation(): void
```

##### `resetNginxAnnotationPrefix` <a name="resetNginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetNginxAnnotationPrefix"></a>

```typescript
public resetNginxAnnotationPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotation">additionalIngressAnnotation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotationInput">additionalIngressAnnotationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefixInput">nginxAnnotationPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngressInput">stableIngressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefix">nginxAnnotationPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngress">stableIngress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalIngressAnnotation`<sup>Required</sup> <a name="additionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotation"></a>

```typescript
public readonly additionalIngressAnnotation: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference</a>

---

##### `additionalIngressAnnotationInput`<sup>Optional</sup> <a name="additionalIngressAnnotationInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotationInput"></a>

```typescript
public readonly additionalIngressAnnotationInput: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---

##### `nginxAnnotationPrefixInput`<sup>Optional</sup> <a name="nginxAnnotationPrefixInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefixInput"></a>

```typescript
public readonly nginxAnnotationPrefixInput: string;
```

- *Type:* string

---

##### `stableIngressInput`<sup>Optional</sup> <a name="stableIngressInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngressInput"></a>

```typescript
public readonly stableIngressInput: string;
```

- *Type:* string

---

##### `nginxAnnotationPrefix`<sup>Required</sup> <a name="nginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefix"></a>

```typescript
public readonly nginxAnnotationPrefix: string;
```

- *Type:* string

---

##### `stableIngress`<sup>Required</sup> <a name="stableIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngress"></a>

```typescript
public readonly stableIngress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficNginx;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---


### OceancdRolloutSpecTrafficOutputReference <a name="OceancdRolloutSpecTrafficOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb">putAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador">putAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio">putIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx">putNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong">putPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi">putSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAlb">resetAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAmbassador">resetAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetCanaryService">resetCanaryService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetIstio">resetIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetNginx">resetNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetPingPong">resetPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetSmi">resetSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetStableService">resetStableService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlb` <a name="putAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb"></a>

```typescript
public putAlb(value: OceancdRolloutSpecTrafficAlb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---

##### `putAmbassador` <a name="putAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador"></a>

```typescript
public putAmbassador(value: OceancdRolloutSpecTrafficAmbassador): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---

##### `putIstio` <a name="putIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio"></a>

```typescript
public putIstio(value: OceancdRolloutSpecTrafficIstio): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---

##### `putNginx` <a name="putNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx"></a>

```typescript
public putNginx(value: OceancdRolloutSpecTrafficNginx): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---

##### `putPingPong` <a name="putPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong"></a>

```typescript
public putPingPong(value: OceancdRolloutSpecTrafficPingPong): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---

##### `putSmi` <a name="putSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi"></a>

```typescript
public putSmi(value: OceancdRolloutSpecTrafficSmi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---

##### `resetAlb` <a name="resetAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAlb"></a>

```typescript
public resetAlb(): void
```

##### `resetAmbassador` <a name="resetAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAmbassador"></a>

```typescript
public resetAmbassador(): void
```

##### `resetCanaryService` <a name="resetCanaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetCanaryService"></a>

```typescript
public resetCanaryService(): void
```

##### `resetIstio` <a name="resetIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetIstio"></a>

```typescript
public resetIstio(): void
```

##### `resetNginx` <a name="resetNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetNginx"></a>

```typescript
public resetNginx(): void
```

##### `resetPingPong` <a name="resetPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetPingPong"></a>

```typescript
public resetPingPong(): void
```

##### `resetSmi` <a name="resetSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetSmi"></a>

```typescript
public resetSmi(): void
```

##### `resetStableService` <a name="resetStableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetStableService"></a>

```typescript
public resetStableService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference">OceancdRolloutSpecTrafficAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassador">ambassador</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference">OceancdRolloutSpecTrafficAmbassadorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istio">istio</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference">OceancdRolloutSpecTrafficIstioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginx">nginx</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference">OceancdRolloutSpecTrafficNginxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPong">pingPong</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference">OceancdRolloutSpecTrafficPingPongOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smi">smi</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference">OceancdRolloutSpecTrafficSmiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.albInput">albInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassadorInput">ambassadorInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryServiceInput">canaryServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istioInput">istioInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginxInput">nginxInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPongInput">pingPongInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smiInput">smiInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableServiceInput">stableServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryService">canaryService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableService">stableService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alb`<sup>Required</sup> <a name="alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.alb"></a>

```typescript
public readonly alb: OceancdRolloutSpecTrafficAlbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference">OceancdRolloutSpecTrafficAlbOutputReference</a>

---

##### `ambassador`<sup>Required</sup> <a name="ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassador"></a>

```typescript
public readonly ambassador: OceancdRolloutSpecTrafficAmbassadorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference">OceancdRolloutSpecTrafficAmbassadorOutputReference</a>

---

##### `istio`<sup>Required</sup> <a name="istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istio"></a>

```typescript
public readonly istio: OceancdRolloutSpecTrafficIstioOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference">OceancdRolloutSpecTrafficIstioOutputReference</a>

---

##### `nginx`<sup>Required</sup> <a name="nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginx"></a>

```typescript
public readonly nginx: OceancdRolloutSpecTrafficNginxOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference">OceancdRolloutSpecTrafficNginxOutputReference</a>

---

##### `pingPong`<sup>Required</sup> <a name="pingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPong"></a>

```typescript
public readonly pingPong: OceancdRolloutSpecTrafficPingPongOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference">OceancdRolloutSpecTrafficPingPongOutputReference</a>

---

##### `smi`<sup>Required</sup> <a name="smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smi"></a>

```typescript
public readonly smi: OceancdRolloutSpecTrafficSmiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference">OceancdRolloutSpecTrafficSmiOutputReference</a>

---

##### `albInput`<sup>Optional</sup> <a name="albInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.albInput"></a>

```typescript
public readonly albInput: OceancdRolloutSpecTrafficAlb;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---

##### `ambassadorInput`<sup>Optional</sup> <a name="ambassadorInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassadorInput"></a>

```typescript
public readonly ambassadorInput: OceancdRolloutSpecTrafficAmbassador;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---

##### `canaryServiceInput`<sup>Optional</sup> <a name="canaryServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryServiceInput"></a>

```typescript
public readonly canaryServiceInput: string;
```

- *Type:* string

---

##### `istioInput`<sup>Optional</sup> <a name="istioInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istioInput"></a>

```typescript
public readonly istioInput: OceancdRolloutSpecTrafficIstio;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---

##### `nginxInput`<sup>Optional</sup> <a name="nginxInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginxInput"></a>

```typescript
public readonly nginxInput: OceancdRolloutSpecTrafficNginx;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---

##### `pingPongInput`<sup>Optional</sup> <a name="pingPongInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPongInput"></a>

```typescript
public readonly pingPongInput: OceancdRolloutSpecTrafficPingPong;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---

##### `smiInput`<sup>Optional</sup> <a name="smiInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smiInput"></a>

```typescript
public readonly smiInput: OceancdRolloutSpecTrafficSmi;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---

##### `stableServiceInput`<sup>Optional</sup> <a name="stableServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableServiceInput"></a>

```typescript
public readonly stableServiceInput: string;
```

- *Type:* string

---

##### `canaryService`<sup>Required</sup> <a name="canaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryService"></a>

```typescript
public readonly canaryService: string;
```

- *Type:* string

---

##### `stableService`<sup>Required</sup> <a name="stableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableService"></a>

```typescript
public readonly stableService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTraffic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---


### OceancdRolloutSpecTrafficPingPongOutputReference <a name="OceancdRolloutSpecTrafficPingPongOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingServiceInput">pingServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongServiceInput">pongServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingService">pingService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongService">pongService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pingServiceInput`<sup>Optional</sup> <a name="pingServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingServiceInput"></a>

```typescript
public readonly pingServiceInput: string;
```

- *Type:* string

---

##### `pongServiceInput`<sup>Optional</sup> <a name="pongServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongServiceInput"></a>

```typescript
public readonly pongServiceInput: string;
```

- *Type:* string

---

##### `pingService`<sup>Required</sup> <a name="pingService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingService"></a>

```typescript
public readonly pingService: string;
```

- *Type:* string

---

##### `pongService`<sup>Required</sup> <a name="pongService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongService"></a>

```typescript
public readonly pongService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficPingPong;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---


### OceancdRolloutSpecTrafficSmiOutputReference <a name="OceancdRolloutSpecTrafficSmiOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer"></a>

```typescript
import { oceancdRolloutSpec } from '@cdktf/provider-spotinst'

new oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetSmiRootService">resetSmiRootService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetTrafficSplitName">resetTrafficSplitName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSmiRootService` <a name="resetSmiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetSmiRootService"></a>

```typescript
public resetSmiRootService(): void
```

##### `resetTrafficSplitName` <a name="resetTrafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetTrafficSplitName"></a>

```typescript
public resetTrafficSplitName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootServiceInput">smiRootServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitNameInput">trafficSplitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootService">smiRootService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitName">trafficSplitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `smiRootServiceInput`<sup>Optional</sup> <a name="smiRootServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootServiceInput"></a>

```typescript
public readonly smiRootServiceInput: string;
```

- *Type:* string

---

##### `trafficSplitNameInput`<sup>Optional</sup> <a name="trafficSplitNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitNameInput"></a>

```typescript
public readonly trafficSplitNameInput: string;
```

- *Type:* string

---

##### `smiRootService`<sup>Required</sup> <a name="smiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootService"></a>

```typescript
public readonly smiRootService: string;
```

- *Type:* string

---

##### `trafficSplitName`<sup>Required</sup> <a name="trafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitName"></a>

```typescript
public readonly trafficSplitName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdRolloutSpecTrafficSmi;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---




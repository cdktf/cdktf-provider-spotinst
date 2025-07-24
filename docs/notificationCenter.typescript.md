# `notificationCenter` Submodule <a name="`notificationCenter` Submodule" id="@cdktf/provider-spotinst.notificationCenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationCenter <a name="NotificationCenter" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center spotinst_notification_center}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenter(scope: Construct, id: string, config: NotificationCenterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig">NotificationCenterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig">NotificationCenterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig">putComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers">putRegisteredUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers">resetRegisteredUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputePolicyConfig` <a name="putComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig"></a>

```typescript
public putComputePolicyConfig(value: NotificationCenterComputePolicyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `putRegisteredUsers` <a name="putRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers"></a>

```typescript
public putRegisteredUsers(value: IResolvable | NotificationCenterRegisteredUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>[]

---

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions"></a>

```typescript
public putSubscriptions(value: IResolvable | NotificationCenterSubscriptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive"></a>

```typescript
public resetIsActive(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegisteredUsers` <a name="resetRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers"></a>

```typescript
public resetRegisteredUsers(): void
```

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions"></a>

```typescript
public resetSubscriptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

notificationCenter.NotificationCenter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

notificationCenter.NotificationCenter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

notificationCenter.NotificationCenter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

notificationCenter.NotificationCenter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationCenter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationCenter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationCenter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig">computePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers">registeredUsers</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput">computePolicyConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput">isActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput">privacyLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput">registeredUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput">subscriptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel">privacyLevel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computePolicyConfig`<sup>Required</sup> <a name="computePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig"></a>

```typescript
public readonly computePolicyConfig: NotificationCenterComputePolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a>

---

##### `registeredUsers`<sup>Required</sup> <a name="registeredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers"></a>

```typescript
public readonly registeredUsers: NotificationCenterRegisteredUsersList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a>

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions"></a>

```typescript
public readonly subscriptions: NotificationCenterSubscriptionsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a>

---

##### `computePolicyConfigInput`<sup>Optional</sup> <a name="computePolicyConfigInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput"></a>

```typescript
public readonly computePolicyConfigInput: NotificationCenterComputePolicyConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput"></a>

```typescript
public readonly isActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privacyLevelInput`<sup>Optional</sup> <a name="privacyLevelInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput"></a>

```typescript
public readonly privacyLevelInput: string;
```

- *Type:* string

---

##### `registeredUsersInput`<sup>Optional</sup> <a name="registeredUsersInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput"></a>

```typescript
public readonly registeredUsersInput: IResolvable | NotificationCenterRegisteredUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>[]

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput"></a>

```typescript
public readonly subscriptionsInput: IResolvable | NotificationCenterSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privacyLevel`<sup>Required</sup> <a name="privacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel"></a>

```typescript
public readonly privacyLevel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationCenterComputePolicyConfig <a name="NotificationCenterComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

const notificationCenterComputePolicyConfig: notificationCenter.NotificationCenterComputePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events">events</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>[]</code> | events block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules">dynamicRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>[]</code> | dynamic_rules block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources">shouldIncludeAllResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events"></a>

```typescript
public readonly events: IResolvable | NotificationCenterComputePolicyConfigEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>[]

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#events NotificationCenter#events}

---

##### `dynamicRules`<sup>Optional</sup> <a name="dynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules"></a>

```typescript
public readonly dynamicRules: IResolvable | NotificationCenterComputePolicyConfigDynamicRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>[]

dynamic_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#dynamic_rules NotificationCenter#dynamic_rules}

---

##### `resourceIds`<sup>Optional</sup> <a name="resourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}.

---

##### `shouldIncludeAllResources`<sup>Optional</sup> <a name="shouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources"></a>

```typescript
public readonly shouldIncludeAllResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}.

---

### NotificationCenterComputePolicyConfigDynamicRules <a name="NotificationCenterComputePolicyConfigDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

const notificationCenterComputePolicyConfigDynamicRules: notificationCenter.NotificationCenterComputePolicyConfigDynamicRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions">filterConditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>[]</code> | filter_conditions block. |

---

##### `filterConditions`<sup>Optional</sup> <a name="filterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions"></a>

```typescript
public readonly filterConditions: IResolvable | NotificationCenterComputePolicyConfigDynamicRulesFilterConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>[]

filter_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#filter_conditions NotificationCenter#filter_conditions}

---

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditions <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

const notificationCenterComputePolicyConfigDynamicRulesFilterConditions: notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#expression NotificationCenter#expression}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#identifier NotificationCenter#identifier}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#operator NotificationCenter#operator}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#expression NotificationCenter#expression}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#identifier NotificationCenter#identifier}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#operator NotificationCenter#operator}.

---

### NotificationCenterComputePolicyConfigEvents <a name="NotificationCenterComputePolicyConfigEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

const notificationCenterComputePolicyConfigEvents: notificationCenter.NotificationCenterComputePolicyConfigEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event">event</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#event NotificationCenter#event}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType">eventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#event_type NotificationCenter#event_type}. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#event NotificationCenter#event}.

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#event_type NotificationCenter#event_type}.

---

### NotificationCenterConfig <a name="NotificationCenterConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

const notificationCenterConfig: notificationCenter.NotificationCenterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig">computePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | compute_policy_config block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel">privacyLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#description NotificationCenter#description}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#id NotificationCenter#id}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#is_active NotificationCenter#is_active}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#name NotificationCenter#name}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers">registeredUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>[]</code> | registered_users block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions">subscriptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>[]</code> | subscriptions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computePolicyConfig`<sup>Required</sup> <a name="computePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig"></a>

```typescript
public readonly computePolicyConfig: NotificationCenterComputePolicyConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

compute_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#compute_policy_config NotificationCenter#compute_policy_config}

---

##### `privacyLevel`<sup>Required</sup> <a name="privacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel"></a>

```typescript
public readonly privacyLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#description NotificationCenter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#id NotificationCenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#is_active NotificationCenter#is_active}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#name NotificationCenter#name}.

---

##### `registeredUsers`<sup>Optional</sup> <a name="registeredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers"></a>

```typescript
public readonly registeredUsers: IResolvable | NotificationCenterRegisteredUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>[]

registered_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#registered_users NotificationCenter#registered_users}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions"></a>

```typescript
public readonly subscriptions: IResolvable | NotificationCenterSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>[]

subscriptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#subscriptions NotificationCenter#subscriptions}

---

### NotificationCenterRegisteredUsers <a name="NotificationCenterRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

const notificationCenterRegisteredUsers: notificationCenter.NotificationCenterRegisteredUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes">subscriptionTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail">userEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#user_email NotificationCenter#user_email}. |

---

##### `subscriptionTypes`<sup>Optional</sup> <a name="subscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes"></a>

```typescript
public readonly subscriptionTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}.

---

##### `userEmail`<sup>Optional</sup> <a name="userEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#user_email NotificationCenter#user_email}.

---

### NotificationCenterSubscriptions <a name="NotificationCenterSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

const notificationCenterSubscriptions: notificationCenter.NotificationCenterSubscriptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#endpoint NotificationCenter#endpoint}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#endpoint NotificationCenter#endpoint}.

---

##### `subscriptionType`<sup>Optional</sup> <a name="subscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get"></a>

```typescript
public get(index: number): NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterComputePolicyConfigDynamicRulesFilterConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>[]

---


### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterComputePolicyConfigDynamicRulesFilterConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>

---


### NotificationCenterComputePolicyConfigDynamicRulesList <a name="NotificationCenterComputePolicyConfigDynamicRulesList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get"></a>

```typescript
public get(index: number): NotificationCenterComputePolicyConfigDynamicRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterComputePolicyConfigDynamicRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>[]

---


### NotificationCenterComputePolicyConfigDynamicRulesOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions">putFilterConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions">resetFilterConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterConditions` <a name="putFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions"></a>

```typescript
public putFilterConditions(value: IResolvable | NotificationCenterComputePolicyConfigDynamicRulesFilterConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>[]

---

##### `resetFilterConditions` <a name="resetFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions"></a>

```typescript
public resetFilterConditions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions">filterConditions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput">filterConditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterConditions`<sup>Required</sup> <a name="filterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions"></a>

```typescript
public readonly filterConditions: NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a>

---

##### `filterConditionsInput`<sup>Optional</sup> <a name="filterConditionsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput"></a>

```typescript
public readonly filterConditionsInput: IResolvable | NotificationCenterComputePolicyConfigDynamicRulesFilterConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterComputePolicyConfigDynamicRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>

---


### NotificationCenterComputePolicyConfigEventsList <a name="NotificationCenterComputePolicyConfigEventsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterComputePolicyConfigEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get"></a>

```typescript
public get(index: number): NotificationCenterComputePolicyConfigEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterComputePolicyConfigEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>[]

---


### NotificationCenterComputePolicyConfigEventsOutputReference <a name="NotificationCenterComputePolicyConfigEventsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType">resetEventType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent"></a>

```typescript
public resetEvent(): void
```

##### `resetEventType` <a name="resetEventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType"></a>

```typescript
public resetEventType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput">eventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterComputePolicyConfigEvents;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>

---


### NotificationCenterComputePolicyConfigOutputReference <a name="NotificationCenterComputePolicyConfigOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterComputePolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules">putDynamicRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents">putEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules">resetDynamicRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds">resetResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources">resetShouldIncludeAllResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicRules` <a name="putDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules"></a>

```typescript
public putDynamicRules(value: IResolvable | NotificationCenterComputePolicyConfigDynamicRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>[]

---

##### `putEvents` <a name="putEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents"></a>

```typescript
public putEvents(value: IResolvable | NotificationCenterComputePolicyConfigEvents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>[]

---

##### `resetDynamicRules` <a name="resetDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules"></a>

```typescript
public resetDynamicRules(): void
```

##### `resetResourceIds` <a name="resetResourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds"></a>

```typescript
public resetResourceIds(): void
```

##### `resetShouldIncludeAllResources` <a name="resetShouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources"></a>

```typescript
public resetShouldIncludeAllResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules">dynamicRules</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events">events</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput">dynamicRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput">eventsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput">resourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput">shouldIncludeAllResourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources">shouldIncludeAllResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicRules`<sup>Required</sup> <a name="dynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules"></a>

```typescript
public readonly dynamicRules: NotificationCenterComputePolicyConfigDynamicRulesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events"></a>

```typescript
public readonly events: NotificationCenterComputePolicyConfigEventsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a>

---

##### `dynamicRulesInput`<sup>Optional</sup> <a name="dynamicRulesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput"></a>

```typescript
public readonly dynamicRulesInput: IResolvable | NotificationCenterComputePolicyConfigDynamicRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>[]

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: IResolvable | NotificationCenterComputePolicyConfigEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>[]

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput"></a>

```typescript
public readonly resourceIdsInput: string[];
```

- *Type:* string[]

---

##### `shouldIncludeAllResourcesInput`<sup>Optional</sup> <a name="shouldIncludeAllResourcesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput"></a>

```typescript
public readonly shouldIncludeAllResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

---

##### `shouldIncludeAllResources`<sup>Required</sup> <a name="shouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources"></a>

```typescript
public readonly shouldIncludeAllResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationCenterComputePolicyConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---


### NotificationCenterRegisteredUsersList <a name="NotificationCenterRegisteredUsersList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterRegisteredUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get"></a>

```typescript
public get(index: number): NotificationCenterRegisteredUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterRegisteredUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>[]

---


### NotificationCenterRegisteredUsersOutputReference <a name="NotificationCenterRegisteredUsersOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterRegisteredUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes">resetSubscriptionTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail">resetUserEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionTypes` <a name="resetSubscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes"></a>

```typescript
public resetSubscriptionTypes(): void
```

##### `resetUserEmail` <a name="resetUserEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail"></a>

```typescript
public resetUserEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput">subscriptionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes">subscriptionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscriptionTypesInput`<sup>Optional</sup> <a name="subscriptionTypesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput"></a>

```typescript
public readonly subscriptionTypesInput: string[];
```

- *Type:* string[]

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput"></a>

```typescript
public readonly userEmailInput: string;
```

- *Type:* string

---

##### `subscriptionTypes`<sup>Required</sup> <a name="subscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes"></a>

```typescript
public readonly subscriptionTypes: string[];
```

- *Type:* string[]

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterRegisteredUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>

---


### NotificationCenterSubscriptionsList <a name="NotificationCenterSubscriptionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get"></a>

```typescript
public get(index: number): NotificationCenterSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>[]

---


### NotificationCenterSubscriptionsOutputReference <a name="NotificationCenterSubscriptionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer"></a>

```typescript
import { notificationCenter } from '@cdktf/provider-spotinst'

new notificationCenter.NotificationCenterSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType">resetSubscriptionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetSubscriptionType` <a name="resetSubscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType"></a>

```typescript
public resetSubscriptionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput">subscriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `subscriptionTypeInput`<sup>Optional</sup> <a name="subscriptionTypeInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput"></a>

```typescript
public readonly subscriptionTypeInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationCenterSubscriptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>

---




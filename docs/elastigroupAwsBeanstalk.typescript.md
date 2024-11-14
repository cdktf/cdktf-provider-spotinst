# `elastigroupAwsBeanstalk` Submodule <a name="`elastigroupAwsBeanstalk` Submodule" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAwsBeanstalk <a name="ElastigroupAwsBeanstalk" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk spotinst_elastigroup_aws_beanstalk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

new elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk(scope: Construct, id: string, config: ElastigroupAwsBeanstalkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig">ElastigroupAwsBeanstalkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig">ElastigroupAwsBeanstalkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences">putDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions">putManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentId">resetBeanstalkEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentName">resetBeanstalkEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetDeploymentPreferences">resetDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetMaintenance">resetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetManagedActions">resetManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentPreferences` <a name="putDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences"></a>

```typescript
public putDeploymentPreferences(value: ElastigroupAwsBeanstalkDeploymentPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---

##### `putManagedActions` <a name="putManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions"></a>

```typescript
public putManagedActions(value: ElastigroupAwsBeanstalkManagedActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask"></a>

```typescript
public putScheduledTask(value: IResolvable | ElastigroupAwsBeanstalkScheduledTask[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a>[]

---

##### `resetBeanstalkEnvironmentId` <a name="resetBeanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentId"></a>

```typescript
public resetBeanstalkEnvironmentId(): void
```

##### `resetBeanstalkEnvironmentName` <a name="resetBeanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentName"></a>

```typescript
public resetBeanstalkEnvironmentName(): void
```

##### `resetDeploymentPreferences` <a name="resetDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetDeploymentPreferences"></a>

```typescript
public resetDeploymentPreferences(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenance` <a name="resetMaintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetMaintenance"></a>

```typescript
public resetMaintenance(): void
```

##### `resetManagedActions` <a name="resetManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetManagedActions"></a>

```typescript
public resetManagedActions(): void
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetScheduledTask"></a>

```typescript
public resetScheduledTask(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElastigroupAwsBeanstalk resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.generateConfigForImport"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElastigroupAwsBeanstalk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElastigroupAwsBeanstalk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElastigroupAwsBeanstalk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupAwsBeanstalk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferences">deploymentPreferences</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference">ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActions">managedActions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference">ElastigroupAwsBeanstalkManagedActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList">ElastigroupAwsBeanstalkScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentIdInput">beanstalkEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentNameInput">beanstalkEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferencesInput">deploymentPreferencesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpotInput">instanceTypesSpotInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenanceInput">maintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActionsInput">managedActionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentId">beanstalkEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentName">beanstalkEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpot">instanceTypesSpot</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenance">maintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentPreferences`<sup>Required</sup> <a name="deploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferences"></a>

```typescript
public readonly deploymentPreferences: ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference">ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference</a>

---

##### `managedActions`<sup>Required</sup> <a name="managedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActions"></a>

```typescript
public readonly managedActions: ElastigroupAwsBeanstalkManagedActionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference">ElastigroupAwsBeanstalkManagedActionsOutputReference</a>

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: ElastigroupAwsBeanstalkScheduledTaskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList">ElastigroupAwsBeanstalkScheduledTaskList</a>

---

##### `beanstalkEnvironmentIdInput`<sup>Optional</sup> <a name="beanstalkEnvironmentIdInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentIdInput"></a>

```typescript
public readonly beanstalkEnvironmentIdInput: string;
```

- *Type:* string

---

##### `beanstalkEnvironmentNameInput`<sup>Optional</sup> <a name="beanstalkEnvironmentNameInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentNameInput"></a>

```typescript
public readonly beanstalkEnvironmentNameInput: string;
```

- *Type:* string

---

##### `deploymentPreferencesInput`<sup>Optional</sup> <a name="deploymentPreferencesInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferencesInput"></a>

```typescript
public readonly deploymentPreferencesInput: ElastigroupAwsBeanstalkDeploymentPreferences;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacityInput"></a>

```typescript
public readonly desiredCapacityInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypesSpotInput`<sup>Optional</sup> <a name="instanceTypesSpotInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpotInput"></a>

```typescript
public readonly instanceTypesSpotInput: string[];
```

- *Type:* string[]

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenanceInput"></a>

```typescript
public readonly maintenanceInput: string;
```

- *Type:* string

---

##### `managedActionsInput`<sup>Optional</sup> <a name="managedActionsInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActionsInput"></a>

```typescript
public readonly managedActionsInput: ElastigroupAwsBeanstalkManagedActions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTaskInput"></a>

```typescript
public readonly scheduledTaskInput: IResolvable | ElastigroupAwsBeanstalkScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a>[]

---

##### `beanstalkEnvironmentId`<sup>Required</sup> <a name="beanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentId"></a>

```typescript
public readonly beanstalkEnvironmentId: string;
```

- *Type:* string

---

##### `beanstalkEnvironmentName`<sup>Required</sup> <a name="beanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentName"></a>

```typescript
public readonly beanstalkEnvironmentName: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceTypesSpot`<sup>Required</sup> <a name="instanceTypesSpot" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpot"></a>

```typescript
public readonly instanceTypesSpot: string[];
```

- *Type:* string[]

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenance"></a>

```typescript
public readonly maintenance: string;
```

- *Type:* string

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAwsBeanstalkConfig <a name="ElastigroupAwsBeanstalkConfig" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

const elastigroupAwsBeanstalkConfig: elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#desired_capacity ElastigroupAwsBeanstalk#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.instanceTypesSpot">instanceTypesSpot</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#instance_types_spot ElastigroupAwsBeanstalk#instance_types_spot}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#max_size ElastigroupAwsBeanstalk#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#min_size ElastigroupAwsBeanstalk#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#name ElastigroupAwsBeanstalk#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#product ElastigroupAwsBeanstalk#product}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#region ElastigroupAwsBeanstalk#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentId">beanstalkEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_id ElastigroupAwsBeanstalk#beanstalk_environment_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentName">beanstalkEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_name ElastigroupAwsBeanstalk#beanstalk_environment_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.deploymentPreferences">deploymentPreferences</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | deployment_preferences block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#id ElastigroupAwsBeanstalk#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maintenance">maintenance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#maintenance ElastigroupAwsBeanstalk#maintenance}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.managedActions">managedActions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | managed_actions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.scheduledTask">scheduledTask</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a>[]</code> | scheduled_task block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#desired_capacity ElastigroupAwsBeanstalk#desired_capacity}.

---

##### `instanceTypesSpot`<sup>Required</sup> <a name="instanceTypesSpot" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.instanceTypesSpot"></a>

```typescript
public readonly instanceTypesSpot: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#instance_types_spot ElastigroupAwsBeanstalk#instance_types_spot}.

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#max_size ElastigroupAwsBeanstalk#max_size}.

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#min_size ElastigroupAwsBeanstalk#min_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#name ElastigroupAwsBeanstalk#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#product ElastigroupAwsBeanstalk#product}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#region ElastigroupAwsBeanstalk#region}.

---

##### `beanstalkEnvironmentId`<sup>Optional</sup> <a name="beanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentId"></a>

```typescript
public readonly beanstalkEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_id ElastigroupAwsBeanstalk#beanstalk_environment_id}.

---

##### `beanstalkEnvironmentName`<sup>Optional</sup> <a name="beanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentName"></a>

```typescript
public readonly beanstalkEnvironmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_name ElastigroupAwsBeanstalk#beanstalk_environment_name}.

---

##### `deploymentPreferences`<sup>Optional</sup> <a name="deploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.deploymentPreferences"></a>

```typescript
public readonly deploymentPreferences: ElastigroupAwsBeanstalkDeploymentPreferences;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

deployment_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#deployment_preferences ElastigroupAwsBeanstalk#deployment_preferences}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#id ElastigroupAwsBeanstalk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maintenance"></a>

```typescript
public readonly maintenance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#maintenance ElastigroupAwsBeanstalk#maintenance}.

---

##### `managedActions`<sup>Optional</sup> <a name="managedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.managedActions"></a>

```typescript
public readonly managedActions: ElastigroupAwsBeanstalkManagedActions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

managed_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#managed_actions ElastigroupAwsBeanstalk#managed_actions}

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: IResolvable | ElastigroupAwsBeanstalkScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a>[]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#scheduled_task ElastigroupAwsBeanstalk#scheduled_task}

---

### ElastigroupAwsBeanstalkDeploymentPreferences <a name="ElastigroupAwsBeanstalkDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

const elastigroupAwsBeanstalkDeploymentPreferences: elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.automaticRoll">automaticRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#automatic_roll ElastigroupAwsBeanstalk#automatic_roll}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.strategy">strategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a>[]</code> | strategy block. |

---

##### `automaticRoll`<sup>Optional</sup> <a name="automaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.automaticRoll"></a>

```typescript
public readonly automaticRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#automatic_roll ElastigroupAwsBeanstalk#automatic_roll}.

---

##### `batchSizePercentage`<sup>Optional</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.strategy"></a>

```typescript
public readonly strategy: IResolvable | ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a>[]

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#strategy ElastigroupAwsBeanstalk#strategy}

---

### ElastigroupAwsBeanstalkDeploymentPreferencesStrategy <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

const elastigroupAwsBeanstalkDeploymentPreferencesStrategy: elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#action ElastigroupAwsBeanstalk#action}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.shouldDrainInstances">shouldDrainInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#should_drain_instances ElastigroupAwsBeanstalk#should_drain_instances}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#action ElastigroupAwsBeanstalk#action}.

---

##### `shouldDrainInstances`<sup>Optional</sup> <a name="shouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.shouldDrainInstances"></a>

```typescript
public readonly shouldDrainInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#should_drain_instances ElastigroupAwsBeanstalk#should_drain_instances}.

---

### ElastigroupAwsBeanstalkManagedActions <a name="ElastigroupAwsBeanstalkManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

const elastigroupAwsBeanstalkManagedActions: elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.property.platformUpdate">platformUpdate</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | platform_update block. |

---

##### `platformUpdate`<sup>Optional</sup> <a name="platformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.property.platformUpdate"></a>

```typescript
public readonly platformUpdate: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

platform_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#platform_update ElastigroupAwsBeanstalk#platform_update}

---

### ElastigroupAwsBeanstalkManagedActionsPlatformUpdate <a name="ElastigroupAwsBeanstalkManagedActionsPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

const elastigroupAwsBeanstalkManagedActionsPlatformUpdate: elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.performAt">performAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#perform_at ElastigroupAwsBeanstalk#perform_at}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.timeWindow">timeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#time_window ElastigroupAwsBeanstalk#time_window}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.updateLevel">updateLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#update_level ElastigroupAwsBeanstalk#update_level}. |

---

##### `performAt`<sup>Optional</sup> <a name="performAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.performAt"></a>

```typescript
public readonly performAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#perform_at ElastigroupAwsBeanstalk#perform_at}.

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.timeWindow"></a>

```typescript
public readonly timeWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#time_window ElastigroupAwsBeanstalk#time_window}.

---

##### `updateLevel`<sup>Optional</sup> <a name="updateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.updateLevel"></a>

```typescript
public readonly updateLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#update_level ElastigroupAwsBeanstalk#update_level}.

---

### ElastigroupAwsBeanstalkScheduledTask <a name="ElastigroupAwsBeanstalkScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

const elastigroupAwsBeanstalkScheduledTask: elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#task_type ElastigroupAwsBeanstalk#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustment">adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#adjustment ElastigroupAwsBeanstalk#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustmentPercentage">adjustmentPercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#adjustment_percentage ElastigroupAwsBeanstalk#adjustment_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.batchSizePercentage">batchSizePercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#cron_expression ElastigroupAwsBeanstalk#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#frequency ElastigroupAwsBeanstalk#frequency}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.gracePeriod">gracePeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#is_enabled ElastigroupAwsBeanstalk#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.maxCapacity">maxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#max_capacity ElastigroupAwsBeanstalk#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.minCapacity">minCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#min_capacity ElastigroupAwsBeanstalk#min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMaxCapacity">scaleMaxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#scale_max_capacity ElastigroupAwsBeanstalk#scale_max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMinCapacity">scaleMinCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#scale_min_capacity ElastigroupAwsBeanstalk#scale_min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleTargetCapacity">scaleTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#scale_target_capacity ElastigroupAwsBeanstalk#scale_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#start_time ElastigroupAwsBeanstalk#start_time}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.targetCapacity">targetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#target_capacity ElastigroupAwsBeanstalk#target_capacity}. |

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#task_type ElastigroupAwsBeanstalk#task_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#adjustment ElastigroupAwsBeanstalk#adjustment}.

---

##### `adjustmentPercentage`<sup>Optional</sup> <a name="adjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustmentPercentage"></a>

```typescript
public readonly adjustmentPercentage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#adjustment_percentage ElastigroupAwsBeanstalk#adjustment_percentage}.

---

##### `batchSizePercentage`<sup>Optional</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#cron_expression ElastigroupAwsBeanstalk#cron_expression}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#frequency ElastigroupAwsBeanstalk#frequency}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#is_enabled ElastigroupAwsBeanstalk#is_enabled}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#max_capacity ElastigroupAwsBeanstalk#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.minCapacity"></a>

```typescript
public readonly minCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#min_capacity ElastigroupAwsBeanstalk#min_capacity}.

---

##### `scaleMaxCapacity`<sup>Optional</sup> <a name="scaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMaxCapacity"></a>

```typescript
public readonly scaleMaxCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#scale_max_capacity ElastigroupAwsBeanstalk#scale_max_capacity}.

---

##### `scaleMinCapacity`<sup>Optional</sup> <a name="scaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMinCapacity"></a>

```typescript
public readonly scaleMinCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#scale_min_capacity ElastigroupAwsBeanstalk#scale_min_capacity}.

---

##### `scaleTargetCapacity`<sup>Optional</sup> <a name="scaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleTargetCapacity"></a>

```typescript
public readonly scaleTargetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#scale_target_capacity ElastigroupAwsBeanstalk#scale_target_capacity}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#start_time ElastigroupAwsBeanstalk#start_time}.

---

##### `targetCapacity`<sup>Optional</sup> <a name="targetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.targetCapacity"></a>

```typescript
public readonly targetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.0/docs/resources/elastigroup_aws_beanstalk#target_capacity ElastigroupAwsBeanstalk#target_capacity}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference <a name="ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

new elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetAutomaticRoll">resetAutomaticRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetBatchSizePercentage">resetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy"></a>

```typescript
public putStrategy(value: IResolvable | ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a>[]

---

##### `resetAutomaticRoll` <a name="resetAutomaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetAutomaticRoll"></a>

```typescript
public resetAutomaticRoll(): void
```

##### `resetBatchSizePercentage` <a name="resetBatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetBatchSizePercentage"></a>

```typescript
public resetBatchSizePercentage(): void
```

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetGracePeriod"></a>

```typescript
public resetGracePeriod(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList">ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRollInput">automaticRollInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategyInput">strategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRoll">automaticRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategy"></a>

```typescript
public readonly strategy: ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList">ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList</a>

---

##### `automaticRollInput`<sup>Optional</sup> <a name="automaticRollInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRollInput"></a>

```typescript
public readonly automaticRollInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentageInput"></a>

```typescript
public readonly batchSizePercentageInput: number;
```

- *Type:* number

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriodInput"></a>

```typescript
public readonly gracePeriodInput: number;
```

- *Type:* number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: IResolvable | ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a>[]

---

##### `automaticRoll`<sup>Required</sup> <a name="automaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRoll"></a>

```typescript
public readonly automaticRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupAwsBeanstalkDeploymentPreferences;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---


### ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

new elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get"></a>

```typescript
public get(index: number): ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a>[]

---


### ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

new elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetShouldDrainInstances">resetShouldDrainInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetShouldDrainInstances` <a name="resetShouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetShouldDrainInstances"></a>

```typescript
public resetShouldDrainInstances(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstancesInput">shouldDrainInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstances">shouldDrainInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `shouldDrainInstancesInput`<sup>Optional</sup> <a name="shouldDrainInstancesInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstancesInput"></a>

```typescript
public readonly shouldDrainInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `shouldDrainInstances`<sup>Required</sup> <a name="shouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstances"></a>

```typescript
public readonly shouldDrainInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupAwsBeanstalkDeploymentPreferencesStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy">ElastigroupAwsBeanstalkDeploymentPreferencesStrategy</a>

---


### ElastigroupAwsBeanstalkManagedActionsOutputReference <a name="ElastigroupAwsBeanstalkManagedActionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

new elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate">putPlatformUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resetPlatformUpdate">resetPlatformUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlatformUpdate` <a name="putPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate"></a>

```typescript
public putPlatformUpdate(value: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---

##### `resetPlatformUpdate` <a name="resetPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resetPlatformUpdate"></a>

```typescript
public resetPlatformUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdate">platformUpdate</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference">ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdateInput">platformUpdateInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `platformUpdate`<sup>Required</sup> <a name="platformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdate"></a>

```typescript
public readonly platformUpdate: ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference">ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference</a>

---

##### `platformUpdateInput`<sup>Optional</sup> <a name="platformUpdateInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdateInput"></a>

```typescript
public readonly platformUpdateInput: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupAwsBeanstalkManagedActions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---


### ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference <a name="ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

new elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetPerformAt">resetPerformAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetUpdateLevel">resetUpdateLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPerformAt` <a name="resetPerformAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetPerformAt"></a>

```typescript
public resetPerformAt(): void
```

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetTimeWindow"></a>

```typescript
public resetTimeWindow(): void
```

##### `resetUpdateLevel` <a name="resetUpdateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetUpdateLevel"></a>

```typescript
public resetUpdateLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAtInput">performAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevelInput">updateLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAt">performAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindow">timeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevel">updateLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `performAtInput`<sup>Optional</sup> <a name="performAtInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAtInput"></a>

```typescript
public readonly performAtInput: string;
```

- *Type:* string

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: string;
```

- *Type:* string

---

##### `updateLevelInput`<sup>Optional</sup> <a name="updateLevelInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevelInput"></a>

```typescript
public readonly updateLevelInput: string;
```

- *Type:* string

---

##### `performAt`<sup>Required</sup> <a name="performAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAt"></a>

```typescript
public readonly performAt: string;
```

- *Type:* string

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: string;
```

- *Type:* string

---

##### `updateLevel`<sup>Required</sup> <a name="updateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevel"></a>

```typescript
public readonly updateLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---


### ElastigroupAwsBeanstalkScheduledTaskList <a name="ElastigroupAwsBeanstalkScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

new elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get"></a>

```typescript
public get(index: number): ElastigroupAwsBeanstalkScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupAwsBeanstalkScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a>[]

---


### ElastigroupAwsBeanstalkScheduledTaskOutputReference <a name="ElastigroupAwsBeanstalkScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer"></a>

```typescript
import { elastigroupAwsBeanstalk } from '@cdktf/provider-spotinst'

new elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustmentPercentage">resetAdjustmentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetBatchSizePercentage">resetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMaxCapacity">resetScaleMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMinCapacity">resetScaleMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleTargetCapacity">resetScaleTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetTargetCapacity">resetTargetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetAdjustmentPercentage` <a name="resetAdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustmentPercentage"></a>

```typescript
public resetAdjustmentPercentage(): void
```

##### `resetBatchSizePercentage` <a name="resetBatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetBatchSizePercentage"></a>

```typescript
public resetBatchSizePercentage(): void
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetCronExpression"></a>

```typescript
public resetCronExpression(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetGracePeriod"></a>

```typescript
public resetGracePeriod(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMinCapacity"></a>

```typescript
public resetMinCapacity(): void
```

##### `resetScaleMaxCapacity` <a name="resetScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMaxCapacity"></a>

```typescript
public resetScaleMaxCapacity(): void
```

##### `resetScaleMinCapacity` <a name="resetScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMinCapacity"></a>

```typescript
public resetScaleMinCapacity(): void
```

##### `resetScaleTargetCapacity` <a name="resetScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleTargetCapacity"></a>

```typescript
public resetScaleTargetCapacity(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTargetCapacity` <a name="resetTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetTargetCapacity"></a>

```typescript
public resetTargetCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentageInput">adjustmentPercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacityInput">scaleMaxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacityInput">scaleMinCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacityInput">scaleTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacityInput">targetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustment">adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentage">adjustmentPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacity">minCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacity">scaleMaxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacity">scaleMinCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacity">scaleTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacity">targetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: string;
```

- *Type:* string

---

##### `adjustmentPercentageInput`<sup>Optional</sup> <a name="adjustmentPercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentageInput"></a>

```typescript
public readonly adjustmentPercentageInput: string;
```

- *Type:* string

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentageInput"></a>

```typescript
public readonly batchSizePercentageInput: string;
```

- *Type:* string

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriodInput"></a>

```typescript
public readonly gracePeriodInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: string;
```

- *Type:* string

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: string;
```

- *Type:* string

---

##### `scaleMaxCapacityInput`<sup>Optional</sup> <a name="scaleMaxCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacityInput"></a>

```typescript
public readonly scaleMaxCapacityInput: string;
```

- *Type:* string

---

##### `scaleMinCapacityInput`<sup>Optional</sup> <a name="scaleMinCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacityInput"></a>

```typescript
public readonly scaleMinCapacityInput: string;
```

- *Type:* string

---

##### `scaleTargetCapacityInput`<sup>Optional</sup> <a name="scaleTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacityInput"></a>

```typescript
public readonly scaleTargetCapacityInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `targetCapacityInput`<sup>Optional</sup> <a name="targetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacityInput"></a>

```typescript
public readonly targetCapacityInput: string;
```

- *Type:* string

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: string;
```

- *Type:* string

---

##### `adjustmentPercentage`<sup>Required</sup> <a name="adjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentage"></a>

```typescript
public readonly adjustmentPercentage: string;
```

- *Type:* string

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: string;
```

- *Type:* string

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: string;
```

- *Type:* string

---

##### `scaleMaxCapacity`<sup>Required</sup> <a name="scaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacity"></a>

```typescript
public readonly scaleMaxCapacity: string;
```

- *Type:* string

---

##### `scaleMinCapacity`<sup>Required</sup> <a name="scaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacity"></a>

```typescript
public readonly scaleMinCapacity: string;
```

- *Type:* string

---

##### `scaleTargetCapacity`<sup>Required</sup> <a name="scaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacity"></a>

```typescript
public readonly scaleTargetCapacity: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacity"></a>

```typescript
public readonly targetCapacity: string;
```

- *Type:* string

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupAwsBeanstalkScheduledTask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask">ElastigroupAwsBeanstalkScheduledTask</a>

---



